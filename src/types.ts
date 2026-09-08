export interface MetricItem {
  value: string;
  label: string;
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface PhilosophyCard {
  number: string;
  step: string;
  title: string;
  description: string;
  phase: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  statusBadge: string;
  typeBadge: string;
  title: string;
  description: string;
  techTags: string[];
  metaLeft: string;
  actionText: string;
  actionType: 'details' | 'track' | 'conception';
  isAccent?: boolean;
  diagram: {
    titleLeft: string;
    titleRight: string;
    subLeft: string;
    subRight: string;
    pipeline?: string[];
    activeStep?: string;
  };
  details?: {
    overview: string;
    architecture: string[];
    features: string[];
    algorithms: string[];
    repository?: string;
  };
}

export interface DsaTopic {
  id: string;
  step: string;
  name: string;
  status: 'Mastered' | 'Active Focus' | 'Advancing';
  problemsCount: number;
  keyAlgorithms: string[];
  complexity: string;
  sampleCode?: string;
}

export interface SkillCategory {
  categoryBadge: string;
  statusBadge: string;
  title: string;
  description: string;
  tags: string[];
  isPrimary?: boolean;
}

export interface TrajectoryPhase {
  phase: string;
  title: string;
  status: 'Solidified' | 'In Progress' | 'Upcoming';
  active?: boolean;
}
