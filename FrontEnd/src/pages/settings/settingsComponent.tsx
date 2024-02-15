/**
 * Settings Component
 * @returns {JSX.Element} - The rendered Settings component.
 */
import "./style.css";
interface SettingsComponentProps {}
const SettingsComponent: React.FC<SettingsComponentProps> = () => {
  document.title = "settings- SportSee";

  return (
    <div className="Settings">
      <h2>Bientôt disponible</h2>
      <p>
        Nous travaillons activement sur cette page. Revenez bientôt pour
        découvrir de nouvelles fonctionnalités.
      </p>
    </div>
  );
};

export default SettingsComponent;
