import type { ContentBoxProps } from "../types/commonTypes";

const ContentBox: React.FC<ContentBoxProps> = ({ title, children }) => {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="border border-white rounded-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
        {children}
      </section>
    </main>
  );
};

export default ContentBox;
