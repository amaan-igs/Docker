import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
    <h1 className="sectionTitle">Skills</h1>
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="Git" />
      <SkillList src={checkMarkIcon} skill="Linux" />
      <SkillList src={checkMarkIcon} skill="Networking" />
      <SkillList src={checkMarkIcon} skill="Python" />
      <SkillList src={checkMarkIcon} skill="JavaScript" />
      <SkillList src={checkMarkIcon} skill="Bash" />
      <SkillList src={checkMarkIcon} skill="PowerShell" />
    </div>
    <hr />
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="CloudFormation" />
      <SkillList src={checkMarkIcon} skill="Terraform" />
      <SkillList src={checkMarkIcon} skill="Docker" />
      <SkillList src={checkMarkIcon} skill="Kubernetes" />
      <SkillList src={checkMarkIcon} skill="Ansible" />
    </div>
    <hr />
    <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="CI/CD Pipelines" />
      <SkillList src={checkMarkIcon} skill="Jenkins" />
      <SkillList src={checkMarkIcon} skill="AWS" />
      <SkillList src={checkMarkIcon} skill="Azure" />
      <SkillList src={checkMarkIcon} skill="Grafana" />
      <SkillList src={checkMarkIcon} skill="Prometheus" />
    </div>
  </section>  
  );
}

export default Skills;
