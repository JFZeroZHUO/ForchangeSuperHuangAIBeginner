import { CodeBlock } from "@/components/ui/CodeBlock";

export default function QuestionsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">报错提问模板</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          高效的提问能让你更快得到解答。
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-2">直接向 AI 提问</h2>
          <p className="mb-4 text-slate-600">
            遇到报错时，直接把报错信息复制给 AI，并附上你正在做的事情。
          </p>
          <CodeBlock 
            title="Prompt"
            language="text"
            code="我正在运行 [命令/代码]，但是遇到了这个错误：
[粘贴报错信息]
请告诉我原因和解决方法。" 
          />
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2">截图向 AI 提问</h2>
          <p className="mb-4 text-slate-600">
            很多时候文字描述不清楚，直接把报错截图发给 AI 是最高效的。
          </p>
          <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
            <p className="font-bold mb-2">把报错的画面截图，直接发给 Trae/ChatGPT/Claude，问它：</p>
            <div className="bg-white dark:bg-black p-3 rounded border border-slate-200 dark:border-slate-800 font-mono text-sm text-slate-700 dark:text-slate-300">
              “我遇到了这个报错，这是什么原因？请告诉我怎么解决？”
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
