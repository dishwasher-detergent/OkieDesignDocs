interface ResponsiveProps {
  children: React.ReactChild;
  size?: number;
}

const Responsive = ({ children, size }: ResponsiveProps) => {
  return (
    <div className="mb-2 flex h-[30rem] items-center justify-center overflow-hidden rounded-md border border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
      <div
        style={{ maxWidth: size + "px" }}
        className="w-full overflow-y-auto overflow-x-hidden bg-white transition-all dark:bg-slate-900"
      >
        <iframe
          className="h-full w-full overflow-hidden"
          /* @ts-ignore */
          srcDoc={`
            <html class="flex w-full h-full ">
              <head>
                  <meta charset="utf-8">
                  <title>Component Preview</title>
                  <script src="https://cdn.tailwindcss.com"></script>

                  <script>
                      tailwind.config = {
                          darkMode: 'class',
                      }

                      function test() {
                          var links = document.querySelectorAll("a");

                          for (var index = 0; index < links.length; index++) {
                              links[index].removeAttribute('href');
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
                  onload="test();"
                  style="height: min-content;"
                  dir="ltr"
                  class="flex items-center flex-1 w-full min-h-full "
              >
                    ${children}
                  </main>
              </body>
            </html>
          `}
        />
      </div>
    </div>
  );
};

export default Responsive;
