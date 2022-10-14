const Test = () => {
  return (
    <div>
        <div class="flex items-center">
          <input
            id="extra-small-checkbox"
            type="checkbox"
            value=""
            class="h-4 w-4 rounded-md border-slate-300 text-purple-500 checked:bg-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-slate-800 dark:bg-slate-600 dark:checked:bg-purple-600 dark:ring-offset-slate-800 dark:focus:ring-purple-500 cursor-pointer"
          />
          <label
            for="extra-small-checkbox"
            class="ml-2 text-xs font-medium dark:text-white"
          >
            Extra Small checkbox
          </label>
        </div>
        <div class="flex items-center">
            <input
                id="small-checkbox"
                type="checkbox"
                value=""
                class="h-4 w-4 rounded-md border-slate-300 text-purple-500 checked:bg-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-slate-800 dark:bg-slate-600 dark:checked:bg-purple-600 dark:ring-offset-slate-800 dark:focus:ring-purple-500 cursor-pointer"
            />
            <label
                for="#5C606A"
                class="ml-2 text-sm font-medium dark:text-white"
            >
                Small checkbox
            </label>
        </div>
        <div class="flex items-center">
            <input
                id="standard-checkbox"
                type="checkbox"
                value=""
                class="h-5 w-5 rounded-md border-slate-300 text-purple-500 checked:bg-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-slate-800 dark:bg-slate-600 dark:checked:bg-purple-600 dark:ring-offset-slate-800 dark:focus:ring-purple-500 cursor-pointer"
            />
            <label
                for="standard-checkbox"
                class="ml-2 text-base font-medium dark:text-white"
            >
                Standard checkbox
            </label>
        </div>
        <div class="flex items-center">
            <input
                id="large-checkbox"
                type="checkbox"
                value=""
                class="h-5 w-5 rounded-md border-slate-300 text-purple-500 checked:bg-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-slate-800 dark:bg-slate-600 dark:checked:bg-purple-600 dark:ring-offset-slate-800 dark:focus:ring-purple-500 cursor-pointer"
            />
            <label
                for="large-checkbox"
                class="ml-2 text-lg font-medium dark:text-white"
            >
                Large checkbox
            </label>
        </div>
        <div class="flex items-center">
            <input
                id="extra-large-checkbox"
                type="checkbox"
                value=""
                class="h-5 w-5 rounded-md border-slate-300 text-purple-500 checked:bg-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-slate-800 dark:bg-slate-600 dark:checked:bg-purple-600 dark:ring-offset-slate-800 dark:focus:ring-purple-500 cursor-pointer"
            />
            <label
                for="extra-large-checkbox"
                class="ml-2 text-xl font-medium dark:text-white"
            >
                Extra Large checkbox
            </label>
        </div>
    </div>
  );
};

export default Test;
