import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VARIANTS } from '@/lib/variants';
import { Phone, Mail, MapPin, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  lastName: z.string().min(2, 'Le nom est requis'),
  firstName: z.string().min(2, 'Le prénom est requis'),
  company: z.string().min(2, 'La concession est requise'),
  phone: z.string().min(10, 'Le numéro de téléphone est invalide'),
  email: z.string().email('Email invalide'),
  service: z.string().min(1, 'Veuillez sélectionner un service'),
  message: z.string().optional()
});

type ContactForm = z.infer<typeof contactSchema>;

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export const Contact = memo(() => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    setStatus('loading');
    setErrorMessage('');
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Remplacez par votre clé générée pour autoshinepro.contact@gmail.com
          subject: "Nouvelle demande de devis AutoShine Pro",
          from_name: "AutoShine Pro Contact",
          Nom: data.lastName,
          Prénom: data.firstName,
          Concession: data.company,
          Téléphone: data.phone,
          Email: data.email,
          Service: data.service,
          Message: data.message || "Aucun message",
        }),
      });

      clearTimeout(timeoutId);
      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
        setErrorMessage(result.message || "Une erreur est survenue lors de l'envoi.");
      }
    } catch (err: any) {
      clearTimeout(timeoutId);
      setStatus('error');
      if (err.name === 'AbortError') {
        setErrorMessage("Délai d'attente dépassé. Veuillez réessayer.");
      } else {
        setErrorMessage("Impossible de joindre le serveur. Veuillez vérifier votre connexion.");
      }
    }
  };

  return (
    <section id="contact" className="bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-glow blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20">
          
          {/* Left Column: Info */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={VARIANTS.container}
            className="relative z-10"
          >
            <motion.div variants={VARIANTS.item} className="inline-flex items-center gap-3 font-mono text-xs font-semibold tracking-[0.32em] uppercase text-gold-500 mb-4">
              <span className="w-7 h-[1px] bg-gold-500" />
              Contactez-Nous
            </motion.div>
            
            <motion.h2 variants={VARIANTS.item} className="font-display text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-tight gold-gradient-text mb-6">
              Démarrons<br/>Notre Partenariat
            </motion.h2>
            
            <motion.p variants={VARIANTS.item} className="text-[0.9rem] font-light text-text-muted leading-[1.82] mb-12 max-w-[450px]">
              Vous gérez une concession ou un groupe automobile en Île-de-France ? Contactez-nous pour un audit gratuit et un devis sur mesure sous 24h.
            </motion.p>

            <motion.div variants={VARIANTS.item} className="flex flex-col gap-4">
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-5 p-5 bg-surface border border-border-subtle group hover:border-gold-500 hover:bg-gold-500/5 transition-all duration-300">
                <div className="w-12 h-12 shrink-0 bg-gold-500/10 flex items-center justify-center text-gold-500">
                  <Phone className="w-[18px] h-[18px]" />
                </div>
                <div>
                  <div className="font-mono text-[0.63rem] font-semibold tracking-[0.2em] uppercase text-text-muted mb-1">Téléphone</div>
                  <div className="font-display text-[0.97rem] text-text-primary group-hover:text-gold-400 transition-colors duration-300">{CONTACT_INFO.phone}</div>
                </div>
              </a>
              
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-5 p-5 bg-surface border border-border-subtle group hover:border-gold-500 hover:bg-gold-500/5 transition-all duration-300">
                <div className="w-12 h-12 shrink-0 bg-gold-500/10 flex items-center justify-center text-gold-500">
                  <Mail className="w-[18px] h-[18px]" />
                </div>
                <div>
                  <div className="font-mono text-[0.63rem] font-semibold tracking-[0.2em] uppercase text-text-muted mb-1">Email</div>
                  <div className="font-display text-[0.97rem] text-text-primary group-hover:text-gold-400 transition-colors duration-300">{CONTACT_INFO.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-5 p-5 bg-surface border border-border-subtle cursor-default">
                <div className="w-12 h-12 shrink-0 bg-gold-500/10 flex items-center justify-center text-gold-500">
                  <MapPin className="w-[18px] h-[18px]" />
                </div>
                <div>
                  <div className="font-mono text-[0.63rem] font-semibold tracking-[0.2em] uppercase text-text-muted mb-1">Localisation</div>
                  <div className="font-display text-[0.97rem] text-text-primary">{CONTACT_INFO.zone}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={VARIANTS.fade}
            className="relative z-10"
          >
            <div className="font-mono text-xs font-semibold tracking-[0.32em] uppercase text-gold-500 mb-8 flex items-center gap-3">
              <span className="w-7 h-[1px] bg-gold-500" />
              Demande de Devis Gratuit
            </div>

            <div className="relative min-h-[500px]">
              <AnimatePresence mode="wait">
                
                {/* Form State */}
                {(status === 'idle' || status === 'error') && (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[0.67rem] font-semibold tracking-[0.2em] uppercase text-text-muted">Nom</label>
                        <input {...register('lastName')} className="bg-surface border border-border-subtle px-4 py-3 font-body text-[0.9rem] text-text-primary outline-none focus:border-gold-500 transition-colors duration-300" placeholder="Votre nom" />
                        {errors.lastName && <span className="text-danger text-xs mt-1">{errors.lastName.message}</span>}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[0.67rem] font-semibold tracking-[0.2em] uppercase text-text-muted">Prénom</label>
                        <input {...register('firstName')} className="bg-surface border border-border-subtle px-4 py-3 font-body text-[0.9rem] text-text-primary outline-none focus:border-gold-500 transition-colors duration-300" placeholder="Votre prénom" />
                        {errors.firstName && <span className="text-danger text-xs mt-1">{errors.firstName.message}</span>}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[0.67rem] font-semibold tracking-[0.2em] uppercase text-text-muted">Concession / Groupe</label>
                      <input {...register('company')} className="bg-surface border border-border-subtle px-4 py-3 font-body text-[0.9rem] text-text-primary outline-none focus:border-gold-500 transition-colors duration-300" placeholder="Nom de votre concession" />
                      {errors.company && <span className="text-danger text-xs mt-1">{errors.company.message}</span>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[0.67rem] font-semibold tracking-[0.2em] uppercase text-text-muted">Téléphone</label>
                        <input type="tel" {...register('phone')} className="bg-surface border border-border-subtle px-4 py-3 font-body text-[0.9rem] text-text-primary outline-none focus:border-gold-500 transition-colors duration-300" placeholder="06 XX XX XX XX" />
                        {errors.phone && <span className="text-danger text-xs mt-1">{errors.phone.message}</span>}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[0.67rem] font-semibold tracking-[0.2em] uppercase text-text-muted">Email</label>
                        <input type="email" {...register('email')} className="bg-surface border border-border-subtle px-4 py-3 font-body text-[0.9rem] text-text-primary outline-none focus:border-gold-500 transition-colors duration-300" placeholder="votre@email.com" />
                        {errors.email && <span className="text-danger text-xs mt-1">{errors.email.message}</span>}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[0.67rem] font-semibold tracking-[0.2em] uppercase text-text-muted">Service Souhaité</label>
                      <div className="relative">
                        <select {...register('service')} defaultValue="" className="bg-surface border border-border-subtle px-4 py-3 font-body text-[0.9rem] text-text-primary outline-none focus:border-gold-500 transition-colors duration-300 w-full appearance-none">
                          <option value="" disabled>Sélectionner un service</option>
                          <option value="livraison">Préparation à la Livraison</option>
                          <option value="parc">Entretien du Parc Exposition</option>
                          <option value="ceramique">Protection Céramique Premium</option>
                          <option value="reconditionnement">Reconditionnement Véhicules d'Occasion</option>
                          <option value="complet">Pack Complet Concessionnaire</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6"><path fill="#8ea5c0" d="M5 6 0 0h10z"/></svg>
                        </div>
                      </div>
                      {errors.service && <span className="text-danger text-xs mt-1">{errors.service.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[0.67rem] font-semibold tracking-[0.2em] uppercase text-text-muted">Message (Optionnel)</label>
                      <textarea {...register('message')} className="bg-surface border border-border-subtle px-4 py-3 font-body text-[0.9rem] text-text-primary outline-none focus:border-gold-500 transition-colors duration-300 min-h-[110px] resize-y" placeholder="Décrivez votre besoin : nombre de véhicules, fréquence souhaitée, zone…" />
                    </div>

                    {status === 'error' && (
                      <div className="p-4 bg-danger/10 border border-danger/20 flex items-start gap-3 mt-2">
                        <AlertCircle className="w-5 h-5 text-danger shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold text-danger mb-1">Erreur d'envoi</div>
                          <div className="text-xs text-danger/80">{errorMessage}</div>
                        </div>
                      </div>
                    )}

                    <button type="submit" className="mt-4 gold-btn w-full py-4 px-6 font-mono text-[0.78rem] tracking-[0.24em] uppercase text-center relative overflow-hidden group">
                      <span className="relative z-10 font-bold">Envoyer Ma Demande</span>
                      <div className="absolute inset-0 bg-[linear-gradient(108deg,transparent_30%,rgba(255,255,255,0.2)_50%,transparent_70%)] -translate-x-[120%] group-hover:translate-x-[220%] transition-transform duration-700 ease-out" />
                    </button>
                  </motion.form>
                )}

                {/* Loading State */}
                {status === 'loading' && (
                  <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-surface border border-border-subtle"
                  >
                    <Loader2 className="w-10 h-10 text-gold-500 animate-spin mb-4" />
                    <div className="font-mono text-sm tracking-[0.2em] uppercase text-text-muted">
                      Transmission en cours...
                    </div>
                  </motion.div>
                )}

                {/* Success State */}
                {status === 'success' && (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-success/5 border border-success/20 p-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-6 text-success">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="font-display text-2xl font-bold text-text-primary mb-3">
                      Demande Envoyée
                    </div>
                    <p className="text-text-muted text-sm max-w-[300px] mb-8 leading-relaxed">
                      Nous avons bien reçu votre demande de devis. Notre équipe vous recontactera sous 24h.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2 border border-border-subtle text-text-muted hover:text-text-primary hover:border-gold-500 transition-colors font-mono text-xs uppercase tracking-widest"
                    >
                      Nouvelle Demande
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
