'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle } from 'lucide-react';

const VIOLATION_TYPES = [
  'Physical Abuse or Assault',
  'Sexual Harassment/Assault',
  'Discrimination or Harassment',
  'Denial of Basic Services',
  'Unsafe Living or Working Conditions',
  'Stigmatization or Retaliation',
  'Privacy or Data Misuse',
  'Corruption or Bribery',
  'Violation of Freedom of Expression',
  'Other',
];

export function ReportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    violationType: '',
    location: '',
    date: '',
    description: '',
    witnesses: '',
    evidence: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.violationType) newErrors.violationType = 'Violation type is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.date) newErrors.date = 'Date of violation is required';
    if (!formData.description || formData.description.length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('[v0] Report submitted:', formData);
      setSubmitted(true);

      // Reset form
      setFormData({
        violationType: '',
        location: '',
        date: '',
        description: '',
        witnesses: '',
        evidence: '',
      });

      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('[v0] Error submitting report:', error);
      setErrors({ submit: 'Failed to submit report. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 dark:bg-green-950 border-2 border-green-500 rounded-lg p-8 text-center max-w-2xl mx-auto">
        <CheckCircle size={48} className="text-green-600 dark:text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
          Report Submitted Successfully
        </h3>
        <p className="text-green-800 dark:text-green-200 mb-4">
          Thank you for your report. We have received it safely and securely. Your report will be reviewed by our team and handled with the utmost confidentiality.
        </p>
        <p className="text-sm text-green-700 dark:text-green-300">
          A reference ID has been generated for your records. Keep it safe in case you need to follow up.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-6">
      {/* Error Alert */}
      {errors.submit && (
        <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4 flex gap-3">
          <AlertCircle size={20} className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-800 dark:text-red-200">{errors.submit}</p>
        </div>
      )}

      {/* Violation Type */}
      <div>
        <label htmlFor="violationType" className="block text-sm font-semibold text-foreground mb-2">
          Type of Violation <span className="text-accent">*</span>
        </label>
        <select
          id="violationType"
          name="violationType"
          value={formData.violationType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">Select a violation type</option>
          {VIOLATION_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.violationType && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.violationType}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-foreground mb-2">
          Location of Violation <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="e.g., Enugu State, workplace, community center"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        {errors.location && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.location}</p>
        )}
      </div>

      {/* Date */}
      <div>
        <label htmlFor="date" className="block text-sm font-semibold text-foreground mb-2">
          Date of Violation <span className="text-accent">*</span>
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
        {errors.date && (
          <p className="text-red-600 dark:text-red-400 text-sm mt-1">{errors.date}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-foreground mb-2">
          Detailed Description <span className="text-accent">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Please provide a detailed account of what happened. Include who was involved, what occurred, and how it affected you."
          value={formData.description}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
        />
        <div className="flex justify-between items-center mt-1">
          <div>
            {errors.description && (
              <p className="text-red-600 dark:text-red-400 text-sm">{errors.description}</p>
            )}
          </div>
          <p className="text-xs text-foreground/40">{formData.description.length} characters</p>
        </div>
      </div>

      {/* Witnesses */}
      <div>
        <label htmlFor="witnesses" className="block text-sm font-semibold text-foreground mb-2">
          Witnesses (Optional)
        </label>
        <textarea
          id="witnesses"
          name="witnesses"
          placeholder="List any witnesses who can verify your account. Include names and roles if possible. (This information is confidential)"
          value={formData.witnesses}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
        />
      </div>

      {/* Evidence */}
      <div>
        <label htmlFor="evidence" className="block text-sm font-semibold text-foreground mb-2">
          Supporting Evidence (Optional)
        </label>
        <textarea
          id="evidence"
          name="evidence"
          placeholder="Describe any evidence you have (photos, documents, emails, messages, etc.). Note: Do not attach personal information you don't want to share."
          value={formData.evidence}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
        />
        <p className="text-xs text-foreground/60 mt-2">
          For sensitive evidence, you can upload files in a separate secure channel.
        </p>
      </div>

      {/* Privacy Notice */}
      <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          <strong>Privacy Guarantee:</strong> Your report is completely anonymous. We do not collect or require any personal identification. Your identity will be protected at all times.
        </p>
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Report'}
        </Button>
        <Button
          type="reset"
          variant="outline"
          className="flex-1"
        >
          Clear Form
        </Button>
      </div>

      <p className="text-xs text-foreground/60 text-center">
        By submitting this form, you agree that the information provided is truthful to the best of your knowledge.
      </p>
    </form>
  );
}
