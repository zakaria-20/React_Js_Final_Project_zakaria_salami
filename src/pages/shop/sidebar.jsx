import React from "react";

const Sidebar = () => {
  return (
    <div className="pl-12">
      <div>
        <h1 className="text-xl font-extrabold">Categories</h1>
      </div>
      <h1 className="text-black text-lg pt-3 hover:text-[#e95a40] cursor-pointer">
        Best Seller (8 items)
      </h1>
      <h1 className="text-gray-400 text-lg pt-1 hover:text-[#e95a40] cursor-pointer">
        Featured (8 items)
      </h1>
      <h1 className="text-gray-400 text-lg pt-1 hover:text-[#e95a40] cursor-pointer">
        Men (8 items)
      </h1>
      <h1 className="text-gray-400 text-lg pt-1 hover:text-[#e95a40] cursor-pointer">
        Women (8 items)
      </h1>
      <div className="pt-10">
        <h1 className="text-xl font-extrabold">Color</h1>
      </div>
      <div class="w-40 text-xl font-semibold">
        <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
          <input
            type="checkbox"
            id="htmlCheckbox"
            name="languageCheckbox"
            class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
          />
          <label for="htmlCheckbox" class="flex w-full space-x-2 text-sm">
            {" "}
            black{" "}
          </label>
        </div>
        <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
          <input
            checked
            type="checkbox"
            id="cssCheckbox"
            name="languageCheckbox"
            class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
          />
          <label for="cssCheckbox" class="flex w-full space-x-2 text-sm">
            {" "}
            gray{" "}
          </label>
        </div>
        <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
          <input
            type="checkbox"
            id="javascriptCheckbox"
            name="languageCheckbox"
            class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
          />
          <label for="javascriptCheckbox" class="flex w-full space-x-2 text-sm">
            {" "}
            red{" "}
          </label>
        </div>
      </div>
      <div  className="pt-10">
        <h1 className="text-xl font-extrabold">Price</h1>
      </div>
      <div class="w-40 text-xl font-semibold">
        <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
          <input
            type="checkbox"
            id="htmlCheckbox"
            name="languageCheckbox"
            class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
          />
          <label for="htmlCheckbox" class="flex w-full space-x-2 text-sm">
            {" "}
            0-20{" "}
          </label>
        </div>
        <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
          <input
            checked
            type="checkbox"
            id="cssCheckbox"
            name="languageCheckbox"
            class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
          />
          <label for="cssCheckbox" class="flex w-full space-x-2 text-sm">
            {" "}
            20-40{" "}
          </label>
        </div>
     
      </div>
      <div className="pt-10">
        <h1 className="text-xl font-extrabold">Size</h1>
      </div>
      <div class="w-40 text-xl font-semibold">
        <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
          <input
            type="checkbox"
            id="htmlCheckbox"
            name="languageCheckbox"
            class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
          />
          <label for="htmlCheckbox" class="flex w-full space-x-2 text-sm">
            {" "}
            L{" "}
          </label>
        </div>
        <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
          <input
            checked
            type="checkbox"
            id="cssCheckbox"
            name="languageCheckbox"
            class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
          />
          <label for="cssCheckbox" class="flex w-full space-x-2 text-sm">
            {" "}
            M{" "}
          </label>
        </div>
        <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
          <input
            type="checkbox"
            id="javascriptCheckbox"
            name="languageCheckbox"
            class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
          />
          <label for="javascriptCheckbox" class="flex w-full space-x-2 text-sm">
            {" "}
            S{" "}
          </label>
        </div>
        <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
          <input
            type="checkbox"
            id="javascriptCheckbox"
            name="languageCheckbox"
            class="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
          />
          <label for="javascriptCheckbox" class="flex w-full space-x-2 text-sm">
            {" "}
            XL{" "}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
