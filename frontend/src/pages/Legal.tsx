import { motion } from 'framer-motion';
import { VARIANTS } from '@/lib/variants';

interface LegalProps {
  title: string;
  lastUpdated: string;
  content: React.ReactNode;
}

export const Legal = ({ title, lastUpdated, content }: LegalProps) => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial="initial"
        animate="animate"
        variants={VARIANTS.container}
      >
        <motion.div variants={VARIANTS.item} className="mb-12 text-center md:text-left">
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-text-primary leading-tight mb-4">
            {title}
          </h1>
          <p className="font-mono text-[0.75rem] uppercase tracking-widest text-text-muted">
            Dernière mise à jour : {lastUpdated}
          </p>
        </motion.div>

        <motion.div 
          variants={VARIANTS.item}
          className="prose prose-invert prose-p:text-text-muted prose-p:font-light prose-p:leading-[1.8] prose-headings:font-display prose-headings:text-gold-400 prose-headings:font-medium max-w-none"
        >
          {content}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const PrivacyPolicy = () => {
  return (
    <Legal 
      title="Politique de Confidentialité" 
      lastUpdated="10 Juin 2026"
      content={
        <>
          <h2>1. Collecte des données</h2>
          <p>Dans le cadre de notre activité, nous sommes amenés à collecter certaines données personnelles vous concernant, notamment via notre formulaire de contact (nom, prénom, adresse e-mail, numéro de téléphone, entreprise).</p>
          
          <h2>2. Utilisation des données</h2>
          <p>Ces données sont exclusivement utilisées pour traiter vos demandes de devis, organiser nos interventions et assurer le suivi commercial de notre partenariat. Aucune donnée n'est revendue à des tiers.</p>
          
          <h2>3. Protection des données</h2>
          <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour garantir la sécurité et la confidentialité de vos données personnelles contre toute altération, destruction ou accès non autorisé.</p>
          
          <h2>4. Vos droits</h2>
          <p>Conformément à la réglementation applicable (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données. Pour exercer ces droits, vous pouvez nous contacter à l'adresse <strong>autoshinepro.contact@gmail.com</strong>.</p>
        </>
      }
    />
  );
};

export const TermsOfService = () => {
  return (
    <Legal 
      title="Mentions Légales & CGV" 
      lastUpdated="10 Juin 2026"
      content={
        <>
          <h2>1. Éditeur du site</h2>
          <p>
            Le site AutoShine Pro est édité par :<br/>
            <strong>AutoShine Pro SAS</strong><br/>
            Siège social : Toulon, France<br/>
            E-mail : autoshinepro.contact@gmail.com
          </p>
          
          <h2>2. Hébergement</h2>
          <p>Ce site est hébergé par Vercel Inc. (ou l'hébergeur de votre choix).</p>
          
          <h2>3. Conditions Générales de Vente (CGV)</h2>
          <p>Nos prestations de détailing premium sont exclusivement réservées aux professionnels de l'automobile (concessionnaires, loueurs). Toute intervention fait l'objet d'un devis préalable validé par le client. Les prix sont exprimés en euros hors taxes (HT).</p>

          <h2>4. Responsabilité</h2>
          <p>AutoShine Pro s'engage à apporter tout le soin nécessaire à la réalisation des prestations. En cas de litige, seul le tribunal de commerce de Toulon sera compétent.</p>
        </>
      }
    />
  );
};
