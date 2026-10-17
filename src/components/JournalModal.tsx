import React, { useState } from 'react';
import { X, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/studioData';
import { JournalArticle } from '../types';

interface JournalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({ isOpen, onClose }) => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FBFBFA] max-w-3xl w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-neutral-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#FBFBFA]/95 backdrop-blur-xs z-10 px-8 py-5 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen size={16} className="text-neutral-800" />
            <span className="text-xs font-mono tracking-widest uppercase text-neutral-500">
              STUDIO JOURNAL & ESSAYS
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {selectedArticle ? (
            <div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-[11px] font-mono tracking-wider uppercase text-neutral-500 hover:text-neutral-900 mb-6 flex items-center gap-1 cursor-pointer"
              >
                ← BACK TO ARTICLES
              </button>

              <div className="flex items-center gap-3 text-[11px] text-neutral-400 font-mono uppercase">
                <span>{selectedArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.date}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h2 className="mt-3 font-editorial text-3xl sm:text-4xl text-neutral-900 leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="mt-6 space-y-4 text-sm text-neutral-700 leading-relaxed font-light">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <h2 className="font-editorial text-3xl text-neutral-900">
                  Architectural Thinking & Research
                </h2>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                  Reflections on materiality, climate responsiveness, and cutting-edge 3D visualization technology from our studio practice.
                </p>
              </div>

              <div className="space-y-6">
                {JOURNAL_ARTICLES.map((article) => (
                  <article
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className="group cursor-pointer p-6 bg-neutral-100/60 border border-neutral-200/80 hover:border-neutral-900 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                      <span>{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock size={10} />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="mt-2 font-editorial text-2xl text-neutral-900 group-hover:text-neutral-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-light">
                      {article.excerpt}
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-[10px] font-semibold tracking-wider text-neutral-900 uppercase">
                      <span>READ ESSAY</span>
                      <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
