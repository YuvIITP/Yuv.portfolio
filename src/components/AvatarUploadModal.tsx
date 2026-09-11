import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Link2, Sparkles, Image as ImageIcon, RotateCcw, Check } from 'lucide-react';

interface AvatarUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAvatar: string;
  onSaveAvatar: (newUrl: string) => void;
  onResetDefault: () => void;
}

export default function AvatarUploadModal({
  isOpen,
  onClose,
  currentAvatar,
  onSaveAvatar,
  onResetDefault,
}: AvatarUploadModalProps) {
  const [urlInput, setUrlInput] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string>(currentAvatar);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvt) => {
        const result = loadEvt.target?.result as string;
        if (result) {
          setPreviewUrl(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvt) => {
        const result = loadEvt.target?.result as string;
        if (result) {
          setPreviewUrl(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (previewUrl) {
      onSaveAvatar(previewUrl);
      onClose();
    }
  };

  const handleUrlApply = () => {
    if (urlInput.trim()) {
      setPreviewUrl(urlInput.trim());
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-lg rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 sm:p-8 text-[#D7E2EA] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#D7E2EA]/15 pb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B600A8] font-bold">
                  <Sparkles className="h-3.5 w-3.5" /> Personalize Avatar
                </span>
                <h3 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">
                  Add Your 3D Cartoon Face
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-[#D7E2EA]/60 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Live Preview Box */}
            <div className="my-6 flex flex-col items-center justify-center">
              <div className="relative h-48 w-48 overflow-hidden rounded-3xl border-2 border-white/20 bg-gradient-to-b from-white/10 to-white/5 p-2 shadow-inner flex items-center justify-center">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Avatar preview"
                    className="max-h-full max-w-full object-contain drop-shadow-lg"
                  />
                ) : (
                  <ImageIcon className="h-16 w-16 text-white/30" />
                )}
                <span className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2 py-0.5 text-[10px] text-white/70 font-mono">
                  Live Preview
                </span>
              </div>
            </div>

            {/* Upload Area */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center cursor-pointer transition-colors ${
                isDragOver
                  ? 'border-[#B600A8] bg-[#B600A8]/10'
                  : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Upload className="h-8 w-8 text-[#B600A8] mb-2" />
              <p className="text-sm font-bold text-white">Click or drag &amp; drop your image</p>
              <p className="text-xs text-[#D7E2EA]/60 mt-1">
                PNG with transparent background, WebP, or JPG (up to 10MB)
              </p>
            </div>

            {/* URL Input */}
            <div className="mt-4">
              <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1.5">
                Or paste an image URL
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <input
                    type="url"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://..."
                    className="w-full rounded-xl border border-white/10 bg-[#16181d] pl-9 pr-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#B600A8] focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleUrlApply}
                  className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  onResetDefault();
                  onClose();
                }}
                className="inline-flex items-center gap-1.5 text-xs text-[#D7E2EA]/60 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset to Default
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-[#D7E2EA] hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#B600A8] to-[#BE4C00] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:opacity-95 transition-opacity cursor-pointer"
                >
                  <Check className="h-3.5 w-3.5" />
                  Apply Avatar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
