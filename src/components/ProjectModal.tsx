import React, { useState, useRef, useEffect } from 'react';
import { X, Layers, Cpu, Code2, ArrowUpRight, CheckCircle2, Play, RefreshCcw } from 'lucide-react';
import { ProjectItem } from '../types.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive' | 'architecture'>('overview');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [shape, setShape] = useState<'rectangle' | 'circle' | 'line'>('rectangle');
  const [strokeColor, setStrokeColor] = useState('#0051d5');
  const [fillColor, setFillColor] = useState('#eff4ff');
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (activeTab === 'interactive' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Draw interactive demo
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      const step = 20;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw centered transformed shape
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.scale(scale, scale);

      ctx.fillStyle = fillColor;
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 3;

      if (shape === 'rectangle') {
        ctx.fillRect(-60, -40, 120, 80);
        ctx.strokeRect(-60, -40, 120, 80);
      } else if (shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      } else if (shape === 'line') {
        ctx.beginPath();
        ctx.moveTo(-70, -40);
        ctx.lineTo(70, 40);
        ctx.stroke();
      }

      ctx.restore();

      // Draw telemetry overlay
      ctx.fillStyle = '#64748b';
      ctx.font = '10px monospace';
      ctx.fillText(`TRANSFORM: ROT=${rotation}° SCALE=${scale.toFixed(1)}x`, 10, 18);
      ctx.fillText(`BUFFER: 400x240 ARGB_32`, 10, 32);
    }
  }, [activeTab, shape, strokeColor, fillColor, rotation, scale]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1c30]/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#f8f9ff] border-b border-[#e2e8f0] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[#e5eeff] text-[#0051d5] border border-[#cbd5e1]">
              {project.statusBadge}
            </span>
            <span className="font-mono text-xs text-[#64748b]">
              {project.typeBadge}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#64748b] hover:text-[#0b1c30] hover:bg-[#e2e8f0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation */}
        <div className="px-6 pt-4 pb-2 border-b border-[#e2e8f0] flex items-center justify-between flex-wrap gap-2">
          <div>
            <h3 className="text-xl font-bold text-[#0b1c30] tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-[#64748b] font-mono mt-0.5">
              {project.metaLeft}
            </p>
          </div>

          <div className="flex space-x-1 bg-[#f1f5f9] p-1 rounded-lg text-xs font-mono">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1 rounded-md transition-all ${
                activeTab === 'overview' ? 'bg-white text-[#0051d5] font-semibold shadow-2xs' : 'text-[#64748b]'
              }`}
            >
              Overview
            </button>
            {project.id === 'graphic-editor' && (
              <button
                onClick={() => setActiveTab('interactive')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'interactive' ? 'bg-white text-[#0051d5] font-semibold shadow-2xs' : 'text-[#64748b]'
                }`}
              >
                Canvas Demo
              </button>
            )}
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1 rounded-md transition-all ${
                activeTab === 'architecture' ? 'bg-white text-[#0051d5] font-semibold shadow-2xs' : 'text-[#64748b]'
              }`}
            >
              Architecture
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-[#45464d]">
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-mono font-semibold text-[#0051d5] uppercase tracking-wider mb-2">
                  System Abstract
                </h4>
                <p className="leading-relaxed">
                  {project.details?.overview || project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold text-[#0051d5] uppercase tracking-wider mb-2.5">
                  Core Implementation Features
                </h4>
                <ul className="space-y-2">
                  {project.details?.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#0f172a]">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold text-[#0051d5] uppercase tracking-wider mb-2">
                  Algorithms Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.details?.algorithms.map((alg, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#eff4ff] border border-[#cbd5e1] text-xs font-mono text-[#0051d5]"
                    >
                      {alg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'interactive' && project.id === 'graphic-editor' && (
            <div className="space-y-4">
              <div className="p-3 bg-[#f8f9ff] rounded-lg border border-[#e2e8f0]">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono mb-3">
                  <div className="flex items-center gap-2">
                    <span>SHAPE:</span>
                    {(['rectangle', 'circle', 'line'] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => setShape(s)}
                        className={`px-2 py-0.5 rounded capitalize ${
                          shape === s ? 'bg-[#0051d5] text-white' : 'bg-white border border-[#cbd5e1] text-[#45464d]'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setRotation(0);
                      setScale(1);
                    }}
                    className="flex items-center gap-1 text-[#64748b] hover:text-[#0b1c30]"
                  >
                    <RefreshCcw className="w-3 h-3" /> Reset
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <label className="block text-[10px] text-[#64748b]">ROTATION ({rotation}°)</label>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={rotation}
                      onChange={(e) => setRotation(Number(e.target.value))}
                      className="w-full h-1.5 bg-[#e2e8f0] rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#64748b]">SCALE ({scale.toFixed(1)}x)</label>
                    <input
                      type="range"
                      min="0.5"
                      max="2"
                      step="0.1"
                      value={scale}
                      onChange={(e) => setScale(Number(e.target.value))}
                      className="w-full h-1.5 bg-[#e2e8f0] rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* HTML5 Canvas Rendering Matrix */}
              <div className="flex justify-center border border-[#e2e8f0] rounded-lg overflow-hidden bg-[#fafafa]">
                <canvas ref={canvasRef} width={400} height={220} className="w-full max-w-[400px] h-[220px]" />
              </div>
              <p className="text-[11px] text-[#64748b] font-mono text-center">
                Interactive demonstration of 2D transformation matrix logic and vector rendering canvas.
              </p>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-semibold text-[#0051d5] uppercase tracking-wider">
                Subsystem Architecture Breakdown
              </h4>
              <div className="space-y-2.5">
                {project.details?.architecture.map((arch, idx) => (
                  <div key={idx} className="p-3 bg-[#f8f9ff] border border-[#e2e8f0] rounded-lg text-xs">
                    <div className="font-mono text-[#0051d5] font-semibold mb-1">
                      NODE 0{idx + 1} // SUBSYSTEM
                    </div>
                    <div className="text-[#0f172a]">{arch}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#f8f9ff] border-t border-[#e2e8f0] flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.techTags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded bg-white border border-[#e2e8f0] text-[11px] font-mono text-[#45464d]">
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-[#000000] text-white hover:bg-[#1e293b] text-xs font-medium transition-colors"
          >
            Close Spec
          </button>
        </div>
      </div>
    </div>
  );
};
