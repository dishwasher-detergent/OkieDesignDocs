interface ResponsiveProps {
  children: React.ReactChild;
  size?: number;
}

const Responsive = ({ children, size }: ResponsiveProps) => {
  return (
    <div className="mb-2 flex items-center justify-center overflow-hidden rounded-md border border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
      <div
        style={{ maxWidth: size + "px" }}
        className="overflow-x-hiddentransition-all w-full overflow-y-auto bg-white dark:bg-slate-900"
      >
        <iframe
          aria-label="component preview"
          title="component preview"
          srcDoc='<html class="flex w-full h-full ">
                <head>
                    <meta charset="utf-8">
                    <title>Component Preview </title>
                    <link rel="stylesheet" href="https://www.okie.design/_next/static/css/d305a89cfe0fb39f.css" /> 
                    <style>
                        .hide { display: none !important; }
                    </style>
                    <script src="https://cdn.tailwindcss.com"></script>

                    <script>
                        tailwind.config = {
                            darkMode: class
                        };

                        function test() {
                            var links = document.querySelectorAll("a");

                            for (var index = 0; index < links.length; index++) {
                                links[index].removeAttribute(&apos;href&apos;);
                            }
                        }
                    </script>

                    <style>
                        a {
                            cursor: pointer;
                        }
                    </style>
                </head>
                <body
                    onLoad="test();"
                    style="height: min-content;"
                    class="flex items-center flex-1 w-full min-h-full "
                >
                    <main class="mx-auto">
                        <div class="badge success">Success</div>
                    </main>
                </body>
            </html>'
          className="h-full w-full resize-x border-0"
          style={{ maxWidth: size + "px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Responsive;
