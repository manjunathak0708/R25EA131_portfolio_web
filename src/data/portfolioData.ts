import {
  MetricItem,
  PhilosophyCard,
  ProjectItem,
  DsaTopic,
  SkillCategory,
  TrajectoryPhase,
} from '../types.ts';

export const PERSONAL_INFO = {
  name: 'MANJUNATHA K',
  shortName: 'MK',
  title: 'B.Tech Artificial Intelligence & Machine Learning student',
  headline: 'Building strong foundations for intelligent software.',
  headlineAccent: 'intelligent software.',
  bio: 'B.Tech Artificial Intelligence & Machine Learning student focused on C++, Data Structures & Algorithms, problem solving, and modern web development.',
  aboutLong1:
    'Motivated Artificial Intelligence & Machine Learning engineering student at Reva University with a strong interest in software development and problem solving. Currently focused on building a strong foundation in Data Structures and Algorithms using C++ and actively developing skills in web development.',
  aboutLong2:
    'Interested in combining strong problem-solving skills with practical web development and gradually developing expertise in machine learning and AI.',
  location: 'Bengaluru, India',
  specialization: 'AIML',
  status: 'Active Student',
  university: 'Reva University, Bengaluru',
  degree: 'B.Tech in Artificial Intelligence & Machine Learning',
  duration: '2025 - 2029 (EXPECTED)',
  cgpa: '9.025',
  email: 'manjunathak007008@gmail.com',
  phone: '8660470745',
  githubUser: 'manjunathak0708',
  githubUrl: 'https://github.com/manjunathak0708',
  leetcodeUser: 'manjunathak007008',
  leetcodeUrl: 'https://leetcode.com/u/manjunathak007008/',
  linkedinUser: 'manjunatha-k-a069953b9',
  linkedinUrl: 'https://www.linkedin.com/in/manjunatha-k-a069953b9',
  devNode: 'DEV_NODE // 0xMK',
};

export const METRICS_DATA: MetricItem[] = [
  {
    value: '9.025',
    label: 'CURRENT CGPA',
    description: 'Academic excellence at Reva Univ',
    iconName: 'GraduationCap',
  },
  {
    value: 'LeetCode',
    label: 'LEETCODE PROFILE',
    description: 'Daily algorithmic discipline transitioning into competitive programming contests',
    iconName: 'Code2',
  },
  {
    value: '2ND',
    label: 'GFG CONTEST PLACE',
    description: 'Competitive coding podium finish',
    iconName: 'Award',
  },
  {
    value: 'C++',
    label: 'PRIMARY LANGUAGE',
    description: 'OOP, STL & systems logic',
    iconName: 'Terminal',
  },
];

export const PHILOSOPHY_DATA: PhilosophyCard[] = [
  {
    number: '01',
    step: 'DECOMPOSE',
    title: 'BREAK IT DOWN',
    description:
      'I approach complex problems by breaking them into smaller, understandable parts. Granular isolation turns intimidating complexity into tractable equations.',
    phase: 'PHASE 1 • ANALYSIS & STRUCTURE',
    iconName: 'Split',
  },
  {
    number: '02',
    step: 'ALGORITHM',
    title: 'SOLVE IT',
    description:
      'Focused on developing logical thinking through Data Structures & Algorithms. Optimizing time and memory footprints through reasoned mathematical trade-offs.',
    phase: 'PHASE 2 • LOGIC OPTIMIZATION',
    iconName: 'Cpu',
  },
  {
    number: '03',
    step: 'SYNTHESIS',
    title: 'BUILD IT',
    description:
      'Turning programming knowledge into practical web applications. Bridging pure competitive logic with real-world, interactive software products.',
    phase: 'PHASE 3 • APPLICATION & DELIVERY',
    iconName: 'Box',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'graphic-editor',
    statusBadge: 'PROJECT // BUILT',
    typeBadge: 'PERSONAL PROJECT',
    title: '2D Graphic Editor',
    description:
      'An AI-integrated 2D graphic editing project focused on combining creative editing workflows with intelligent features. Implements native canvas logic and graphics manipulation algorithms.',
    techTags: ['C++', 'Graphics Logic', 'AI Integration', 'GUI'],
    metaLeft: 'LOCAL REPOSITORY BUILD',
    actionText: 'View Project Details →',
    actionType: 'details',
    diagram: {
      titleLeft: 'GRAPHICS ENGINE',
      titleRight: 'C++ Core',
      subLeft: 'Vector Transforms',
      subRight: 'AI Hook Ready',
    },
    details: {
      overview:
        'A high-performance 2D vector and raster manipulation engine architected in C++ with modern rendering loops, mathematical matrix transformations, and AI prompt hook interfaces.',
      architecture: [
        'Raster & Vector canvas abstraction layer with sub-pixel rendering accuracy',
        'Affine transformations: scale, translate, rotate via 3x3 homogeneous matrix math',
        'Stateful undo/redo history using optimized command-pattern stacks',
        'AI prompt hooks ready for automated neural layer synthesis and style transfers',
      ],
      features: [
        'Parametric shape rasterization (Bresenham line and midpoint circle algorithms)',
        'Multi-layer composition blending modes (Normal, Multiply, Screen, Overlay)',
        'Interactive transform handles with bounding-box collision detection',
        'Memory-safe C++ modern resource management (RAII and smart pointer buffers)',
      ],
      algorithms: ['Bresenham Algorithm', 'Matrix 3x3 Affine Transforms', 'Quadtree Spatial Partitioning'],
      repository: 'https://github.com/manjunathak0708',
    },
  },
  {
    id: 'web-development',
    statusBadge: 'CURRENTLY LEARNING',
    typeBadge: 'ACTIVE SPRINT',
    title: 'AI / Web Development',
    description:
      'Currently exploring modern web development and working toward building complete applications using the MERN stack. Transitioning algorithmic intuition into responsive full-stack services.',
    techTags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    metaLeft: 'MERN APPRENTICESHIP',
    actionText: 'Track Progress →',
    actionType: 'track',
    isAccent: true,
    diagram: {
      titleLeft: 'MERN PIPELINE',
      titleRight: 'Learning & Building',
      subLeft: '',
      subRight: '',
      pipeline: ['Mongo', 'Express', 'React', 'Node'],
      activeStep: 'React',
    },
    details: {
      overview:
        'Continuous deep dive into full-stack engineering, learning how to build scalable RESTful APIs, manage schema-driven databases, and craft responsive interactive UI clients.',
      architecture: [
        'Modular Express.js routing architecture with middleware error boundaries',
        'React state management, custom hooks, and component lifecycle paradigms',
        'MongoDB schema modeling with Mongoose indexing and aggregation pipelines',
        'JWT-based secure authentication protocols and stateless session verification',
      ],
      features: [
        'CRUD interfaces backed by Node and Express REST endpoints',
        'Real-time state synchronization and optimistic client mutations',
        'Responsive layout engineering adhering to atomic component principles',
      ],
      algorithms: ['Rate-Limiting Token Bucket', 'B-Tree Indexing Awareness', 'Debounced Async Querying'],
      repository: 'https://github.com/manjunathak0708',
    },
  },
  {
    id: 'future-project',
    statusBadge: 'RESERVED SPACE',
    typeBadge: 'COMING SOON',
    title: 'Future Project',
    description:
      'A space reserved for the next project built around software development, AI, or problem solving. Will incorporate performance benchmarks, systems architecture, and intelligent heuristics.',
    techTags: ['Systems', 'Algorithms', 'Intelligence'],
    metaLeft: 'TARGET // 2025-2026',
    actionText: 'Pipeline Stage • In Conception',
    actionType: 'conception',
    diagram: {
      titleLeft: '',
      titleRight: '',
      subLeft: '',
      subRight: '',
    },
    details: {
      overview:
        'An upcoming research and systems engineering initiative targeting distributed algorithms or hardware-accelerated machine learning inference.',
      architecture: [
        'High-concurrency parallel compute architecture',
        'Low-overhead memory allocation profiling',
        'Benchmarking suite against standardized algorithmic inputs',
      ],
      features: [
        'Zero-allocation fast paths for core data streams',
        'Benchmarked latency profiles across varied dataset sizes',
      ],
      algorithms: ['SIMD Vectorization', 'Lock-free Ring Buffers'],
    },
  },
];

export const DSA_TOPICS: DsaTopic[] = [
  {
    id: 'arrays',
    step: '01',
    name: 'ARRAYS',
    status: 'Mastered',
    problemsCount: 78,
    keyAlgorithms: ['Two-Pointer Strategy', 'Sliding Window', "Kadane's Maximum Subarray", 'Prefix Sum Arrays'],
    complexity: 'O(1) random access, O(N) linear search',
    sampleCode: `// Two-Pointer In-Place Target Sum
bool hasPairWithSum(const vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) return true;
        if (sum < target) left++;
        else right--;
    }
    return false;
}`,
  },
  {
    id: 'vectors',
    step: '02',
    name: 'VECTORS',
    status: 'Mastered',
    problemsCount: 64,
    keyAlgorithms: ['Dynamic Amortized Doubling', 'Capacity vs Size Mechanics', 'In-place Iterator Transformations'],
    complexity: 'O(1) amortized insertion, O(N) reallocation copy',
    sampleCode: `// Memory-Conscious Vector Reservation
std::vector<int> buffer;
buffer.reserve(10000); // Prevent repeated O(N) re-allocations
for (int i = 0; i < 10000; ++i) {
    buffer.emplace_back(i * 2);
}`,
  },
  {
    id: 'stack',
    step: '03',
    name: 'STACK',
    status: 'Mastered',
    problemsCount: 52,
    keyAlgorithms: ['Monotonic Stack', 'Valid Parentheses Balancing', 'Daily Temperatures', 'Largest Rectangle in Histogram'],
    complexity: 'O(1) push, O(1) pop',
    sampleCode: `// Monotonic Stack for Next Greater Element
vector<int> nextGreater(const vector<int>& nums) {
    int n = nums.size();
    vector<int> res(n, -1);
    stack<int> st; // stores indices
    for (int i = 0; i < n; ++i) {
        while (!st.empty() && nums[st.top()] < nums[i]) {
            res[st.top()] = nums[i];
            st.pop();
        }
        st.push(i);
    }
    return res;
}`,
  },
  {
    id: 'queue',
    step: '04',
    name: 'QUEUE',
    status: 'Mastered',
    problemsCount: 41,
    keyAlgorithms: ['Circular Buffer Queue', 'Sliding Window Maximum (Deque)', 'Breadth-First Search Traversal Core'],
    complexity: 'O(1) enqueue, O(1) dequeue',
    sampleCode: `// Sliding Window Maximum using Monotonic Deque
vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    deque<int> dq;
    vector<int> result;
    for (int i = 0; i < nums.size(); ++i) {
        if (!dq.empty() && dq.front() == i - k) dq.pop_front();
        while (!dq.empty() && nums[dq.back()] < nums[i]) dq.pop_back();
        dq.push_back(i);
        if (i >= k - 1) result.push_back(nums[dq.front()]);
    }
    return result;
}`,
  },
  {
    id: 'recursion',
    step: '05',
    name: 'RECURSION',
    status: 'Active Focus',
    problemsCount: 46,
    keyAlgorithms: ['Backtracking Pruning', 'Divide and Conquer', 'Call Stack Optimization', 'Subset & Permutation Trees'],
    complexity: 'O(2^N) or O(N!) search space with state pruning',
    sampleCode: `// Backtracking Subset Generation
void generateSubsets(int idx, vector<int>& nums, vector<int>& curr, vector<vector<int>>& all) {
    all.push_back(curr);
    for (int i = idx; i < nums.size(); ++i) {
        curr.push_back(nums[i]);
        generateSubsets(i + 1, nums, curr, all);
        curr.pop_back(); // backtrack
    }
}`,
  },
  {
    id: 'trees',
    step: '06',
    name: 'TREES',
    status: 'Advancing',
    problemsCount: 33,
    keyAlgorithms: ['Binary Search Tree Validations', 'DFS (Pre/In/Postorder)', 'Lowest Common Ancestor', 'Diameter & Depth Computation'],
    complexity: 'O(log N) balanced lookup, O(N) worst-case traversal',
    sampleCode: `// Maximum Depth of Binary Tree
int maxDepth(TreeNode* root) {
    if (!root) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}`,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryBadge: 'FOUNDATIONAL CORE',
    statusBadge: 'PRIMARY',
    title: 'C++ Language',
    description:
      'Primary language for algorithmic computations, object-oriented systems design, and memory discipline.',
    tags: ['C++', 'Advanced STL', 'Memory Management', 'OOP Principles'],
    isPrimary: true,
  },
  {
    categoryBadge: 'PROBLEM SOLVING',
    statusBadge: 'ACTIVE',
    title: 'Data Structures & Algorithms',
    description:
      'Core mathematical paradigms, time-complexity analysis, and structural implementations.',
    tags: ['Arrays', 'Vectors', 'Stack', 'Queue', 'Recursion', 'Trees'],
  },
  {
    categoryBadge: 'FULL STACK',
    statusBadge: 'CURRENTLY LEARNING',
    title: 'Web Development',
    description:
      'Building end-to-end full-stack applications with JavaScript/Node.js ecosystem and relational/document stores.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
  {
    categoryBadge: 'ENGINEERING TOOLS',
    statusBadge: 'WORKFLOW',
    title: 'Tools & Environment',
    description:
      'Standard development environments, version control protocols, and Unix shell utilities.',
    tags: ['Git', 'GitHub', 'VS Code'],
  },
];

export const TRAJECTORY_PHASES: TrajectoryPhase[] = [
  { phase: 'PHASE 01', title: 'C++', status: 'Solidified' },
  { phase: 'PHASE 02', title: 'DSA', status: 'Solidified' },
  { phase: 'PHASE 03', title: 'WEB DEV', status: 'In Progress', active: true },
  { phase: 'PHASE 04', title: 'AI / ML', status: 'Upcoming' },
];
