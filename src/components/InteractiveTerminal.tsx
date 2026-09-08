import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Check, Copy, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface InteractiveTerminalProps {
  onTriggerAction?: (action: string) => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ onTriggerAction }) => {
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([]);
  const [inputVal, setInputVal] = useState('');
  const [isInteractiveMode, setIsInteractiveMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  const defaultTelemetry = (
    <div className="space-y-4">
      <div className="text-[#64748b] text-[11px] font-mono tracking-wide">
        // TELEMETRY SNAPSHOT • MK-AIML-01
      </div>

      <div className="grid grid-cols-1 gap-1 text-xs font-mono">
        <div className="flex">
          <span className="w-24 text-[#64748b]">NAME:</span>
          <span className="font-semibold text-[#0f172a]">{PERSONAL_INFO.name}</span>
        </div>
        <div className="flex">
          <span className="w-24 text-[#64748b]">PROGRAM:</span>
          <span className="text-[#0f172a]">B.Tech AIML • REVA UNIV</span>
        </div>
        <div className="flex">
          <span className="w-24 text-[#64748b]">PRIMARY:</span>
          <span className="text-[#0051d5] font-medium">C++ (OOP / STL)</span>
        </div>
        <div className="flex">
          <span className="w-24 text-[#64748b]">CORE:</span>
          <span className="text-[#0f172a]">DSA & Problem Solving</span>
        </div>
        <div className="flex">
          <span className="w-24 text-[#64748b]">STACK:</span>
          <span className="text-[#0f172a]">MERN (Currently Learning)</span>
        </div>
      </div>

      {/* JSON Snippet Box */}
      <div className="rounded border border-[#e2e8f0] bg-[#f8f9ff] p-3 text-[11px] font-mono">
        <div className="flex justify-between text-[#64748b] border-b border-[#e2e8f0] pb-1.5 mb-2">
          <span>execution_target.json</span>
          <span className="text-[#059669] font-medium">status: 200 OK</span>
        </div>
        <pre className="text-[#0f172a] leading-relaxed">
          <span className="text-[#0051d5]">const</span> <span className="text-[#0f172a]">engineer</span> = &#123;{'\n'}
          {'  '}focus: <span className="text-[#059669]">"DSA & Software Eng"</span>,{'\n'}
          {'  '}target: <span className="text-[#059669]">"2026 Internships"</span>{'\n'}
          &#125;;
        </pre>
      </div>
    </div>
  );

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    setIsInteractiveMode(true);

    let response: React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs">
            <p className="text-[#64748b]">Available commands:</p>
            <p><span className="text-[#0051d5] font-semibold">status</span> - View telemetry snapshot</p>
            <p><span className="text-[#0051d5] font-semibold">skills</span> - Dump verified engineering stack</p>
            <p><span className="text-[#0051d5] font-semibold">dsa</span> - Problem solving metrics</p>
            <p><span className="text-[#0051d5] font-semibold">contact</span> - Retrieve direct comms channels</p>
            <p><span className="text-[#0051d5] font-semibold">projects</span> - View active repositories</p>
            <p><span className="text-[#0051d5] font-semibold">clear</span> - Reset terminal view</p>
          </div>
        );
        break;
      case 'status':
        response = (
          <div className="text-xs space-y-1 text-[#0f172a]">
            <p>● Systems Online: MK-DEV-ENV v2.4</p>
            <p>Academic Standing: 9.025 CGPA @ Reva University</p>
            <p>Active Focus: Recursion & Trees • MERN Stack Dev</p>
          </div>
        );
        break;
      case 'skills':
        response = (
          <div className="text-xs space-y-1 text-[#0f172a]">
            <p className="font-semibold text-[#0051d5]">[FOUNDATIONAL CORE]</p>
            <p>• C++ (Modern STL, OOP, RAII, Memory Discipline)</p>
            <p className="font-semibold text-[#0051d5]">[PROBLEM SOLVING]</p>
            <p>• DSA (314+ Solved on LeetCode, GFG 2nd Place)</p>
            <p className="font-semibold text-[#0051d5]">[WEB STACK]</p>
            <p>• MongoDB, Express.js, React.js, Node.js</p>
          </div>
        );
        break;
      case 'dsa':
        response = (
          <div className="text-xs text-[#0f172a]">
            <p className="text-[#059669] font-medium">LeetCode: 314+ Problems Solved</p>
            <p>Top tracks: Arrays (78), Vectors (64), Stack (52), Queue (41), Recursion (46), Trees (33)</p>
            <p>Contest finish: 2nd Place @ GeeksforGeeks Contest</p>
          </div>
        );
        break;
      case 'projects':
        response = (
          <div className="text-xs space-y-1 text-[#0f172a]">
            <p>1. <strong>2D Graphic Editor</strong> (C++, Vector Transforms, GUI)</p>
            <p>2. <strong>AI / Web Dev App</strong> (React, Node, Express, MongoDB)</p>
            <p>3. <strong>Future Systems Suite</strong> (Concurrency & Benchmarking)</p>
          </div>
        );
        break;
      case 'contact':
        response = (
          <div className="text-xs text-[#0f172a]">
            <p>Email: {PERSONAL_INFO.email}</p>
            <p>Phone: +91 {PERSONAL_INFO.phone}</p>
            <p>GitHub: github.com/{PERSONAL_INFO.githubUser}</p>
            <p>LinkedIn: linkedin.com/in/{PERSONAL_INFO.linkedinUser}</p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setIsInteractiveMode(false);
        setInputVal('');
        return;
      default:
        response = (
          <p className="text-[#dc2626] text-xs">
            Unknown command: "{cmdText}". Type <span className="underline font-mono">help</span> for command list.
          </p>
        );
    }

    setHistory((prev) => [...prev, { cmd: cmdText, output: response }]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  const handleCopySnapshot = () => {
    const text = `// TELEMETRY SNAPSHOT • MK-AIML-01
NAME: ${PERSONAL_INFO.name}
PROGRAM: B.Tech AIML • REVA UNIV
PRIMARY: C++ (OOP / STL)
CORE: DSA & Problem Solving
STACK: MERN
CGPA: 9.025
LeetCode: 314+ Solved
Target: 2026 Internships`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (isInteractiveMode && terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isInteractiveMode]);

  return (
    <div className="w-full max-w-lg bg-white rounded-lg border border-[#e2e8f0] shadow-sm overflow-hidden flex flex-col font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="px-4 py-2.5 bg-[#f8f9ff] border-b border-[#e2e8f0] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
          </div>
          <span className="text-[11px] font-mono text-[#64748b] ml-1 tracking-wider">
            SYSTEM://MK-DEV-ENV
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]"></span>
            </span>
            <span className="text-[10px] font-semibold text-[#059669] tracking-wider">
              ONLINE
            </span>
          </div>

          <button
            onClick={handleCopySnapshot}
            className="text-[#64748b] hover:text-[#0b1c30] p-1 rounded hover:bg-[#eff4ff] transition-colors"
            title="Copy Telemetry"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 bg-white min-h-[250px] flex-1 overflow-y-auto max-h-[360px] space-y-3">
        {!isInteractiveMode ? (
          defaultTelemetry
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#e2e8f0] text-[#64748b] text-[11px]">
              <span>MK-INTERACTIVE-CLI v1.2</span>
              <button
                onClick={() => {
                  setIsInteractiveMode(false);
                  setHistory([]);
                }}
                className="text-[#0051d5] hover:underline flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" /> View default telemetry
              </button>
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center text-[#0b1c30]">
                  <span className="text-[#0051d5] mr-1.5 font-bold">&gt;</span>
                  <span className="font-semibold">{item.cmd}</span>
                </div>
                <div className="pl-3.5 text-[#334155]">{item.output}</div>
              </div>
            ))}
          </div>
        )}

        {/* Input prompt line */}
        <form onSubmit={handleSubmit} className="flex items-center text-[#0f172a] pt-1">
          <span className="text-[#0051d5] font-bold mr-1.5 select-none">&gt;</span>
          <span className="text-[#64748b] mr-1 select-none">
            {!isInteractiveMode ? 'system ready for compute' : ''}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder={!isInteractiveMode ? '' : 'Type help, skills, dsa, contact...'}
            className="flex-1 bg-transparent outline-none text-xs font-mono text-[#0f172a] placeholder-[#94a3b8]"
          />
          <span className="inline-block w-2 h-4 bg-[#0051d5] animate-pulse ml-0.5"></span>
        </form>
        <div ref={terminalBottomRef} />
      </div>

      {/* Quick Interactive Command Chips */}
      <div className="px-4 py-1.5 bg-[#f8f9ff] border-t border-[#e2e8f0] flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-[#64748b] mr-1">RUN:</span>
        {['status', 'skills', 'dsa', 'projects', 'contact'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded bg-white border border-[#cbd5e1] hover:border-[#0051d5] text-[10px] text-[#334155] hover:text-[#0051d5] transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="px-4 py-2.5 bg-[#eff4ff]/60 border-t border-[#e2e8f0] flex items-center justify-between text-[10px] font-mono">
        <div className="text-[#45464d]">
          <span className="text-[#64748b]">STATUS: </span>
          <span className="font-semibold text-[#0b1c30]">Learning -&gt; Building -&gt; Improving</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <span className="font-semibold text-[#0051d5]">100%</span>
          <span className="text-[#065f46] font-bold tracking-wider">COMMITTED</span>
        </div>
      </div>
    </div>
  );
};
