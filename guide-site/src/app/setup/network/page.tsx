import { WarningBox } from "@/components/ui/WarningBox";
import { CompletionCheckbox } from "@/components/CompletionCheckbox";

export default function NetworkSetupPage() {
  return (
    <div className="max-w-3xl">
      <div>
        <h1>获取科学上网指引</h1>
        <p className="text-lg text-muted-foreground">
          这是进行 AI 编程开发的第一步，也是最重要的一步。
        </p>
      </div>

      <WarningBox title="重要提示" className="my-8">
        <p>请严格遵守当地法律法规，仅用于合法的学习和技术研究用途。</p>
        <p className="mt-2 font-semibold">请勿在任何公开场合传播具体的节点或服务商链接。</p>
      </WarningBox>

      <div className="space-y-8">
        <section>
          <h2>为什么需要？</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            "科学上网"是指通过特定工具访问国际互联网。就像学英语需要去英语角一样，学习最前沿的 AI 技术，我们需要进入全球开发者的社区。
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>获取最新工具</strong>：访问 GitHub 下载全球开发者共享的优质代码</li>
            <li><strong>连接最强大脑</strong>：稳定使用 Claude、ChatGPT 等顶级 AI 模型</li>
            <li><strong>解决开发难题</strong>：Google 搜索比百度能更精准地找到技术报错的答案</li>
          </ul>
        </section>

        <section>
          <h2>科学上网工具</h2>
          <p className="text-muted-foreground mb-4">
            如果你还没有稳定的工具，可以参考以下推荐方案：
          </p>
          
          <div className="mb-6">
            <a 
              href="https://sakuracat-4.com/dashboard" 
              target="_blank" 
              className="text-primary hover:underline font-medium text-lg flex items-center gap-2"
            >
              👉 科学上网工具参考：樱花猫
            </a>
          </div>

          <WarningBox title="非强制声明">
            <p>本链接不是强制要求，大家可以根据自己需求，自己去找其他的科学上网工具。</p>
            <p className="mt-2 font-medium">科学上网工具，需要大家自行根据需要购买和使用。</p>
            <p className="mt-2">民间教学，仅用于 AI 编程学习。</p>
          </WarningBox>
        </section>

        <div className="space-y-6 mt-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <span>🚩</span> 本关任务打卡
          </h2>
          <div className="rounded-xl p-6">
            <p className="font-medium text-black dark:text-white mb-4">
              自行购买并安装使用好工具后，尝试访问以下网站，以验证连接是否畅通：
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold">1</span>
                <span className="flex items-center gap-2">
                  <a href="https://www.youtube.com" target="_blank" className="font-bold hover:underline text-black dark:text-white">YouTube.com</a>
                  <span className="text-muted-foreground text-sm">- 全球最大视频平台</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold">2</span>
                <span className="flex items-center gap-2">
                  <a href="https://www.google.com" target="_blank" className="font-bold hover:underline text-black dark:text-white">Google.com</a>
                  <span className="text-muted-foreground text-sm">- 全球最大搜索引擎</span>
                </span>
              </li>
            </ul>

            <CompletionCheckbox label="任务打卡：我已成功连接全球互联网！" />
          </div>
        </div>
      </div>
    </div>
  );
}
