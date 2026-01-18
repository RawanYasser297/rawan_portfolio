import { useTranslation } from "react-i18next";

const LeaveComment = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="rounded-3xl bg-card p-8 shadow-md space-y-6">

          {/* Title */}
          <h2 className="text-2xl font-semibold text-foreground">
            {t("comment.title")}
          </h2>

          {/* Subtitle */}
          <p className="text-muted-foreground">
            {t("comment.subtitle")}
          </p>

          {/* Textarea */}
          <textarea
            placeholder={t("comment.placeholder")}
            className="
              w-full
              min-h-[140px]
              resize-none
              rounded-2xl
              border
              border-border
              bg-background
              p-4
              text-foreground
              placeholder:text-muted-foreground
              focus:outline-none
              focus:ring-2
              focus:ring-primary/40
              transition
            "
          />

          {/* Button */}
          <div className="flex justify-end">
            <button
              className="
                rounded-xl
                bg-primary
                px-6
                py-2.5
                text-sm
                font-medium
                text-primary-foreground
                shadow-[var(--shadow-glow)]
                hover:opacity-90
                transition
              "
            >
              {t("comment.button")}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeaveComment;
