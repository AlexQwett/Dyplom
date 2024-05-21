import React, { useState } from "react";
import FormInput from "./FormInput";
import { Form, Link } from "react-router-dom";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";
import FormDatePicker from "./FormDatePicker";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const [selectCategoryList, setSelectCategoryList] = useState([
    "Всі",
    "Корм",
    "Ветеринарні препарати"
  ]);
  const [selectBrandList, setSelectBrandList] = useState([
    "Всі",
    "Mystic",
    "Marpet",
    "Healthy Pet",
    "Zoo-Box"
  ]);

  return (
    <Form className="bg-blue-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="Пошук"
        name="search"
        size="input-sm"
        defaultValue=""
      />
      {/* CATEGORIES */}
      <FormSelect
        label="Вибрати категорію"
        name="category"
        list={selectCategoryList}
        size="select-sm"
        defaultValue="Всі"
      />
      {/* COMPANIES */}
      <FormSelect
        label="Вибрати торгову марку"
        name="brand"
        list={selectBrandList}
        size="select-sm"
        defaultValue="Всі"
      />
      {/* ORDER */}
      <FormSelect
        label="Сортувати за"
        name="order"
        list={["За зростанням", "За спаданням", "За спаданням ціни", "За зростанням ціни"]}
        size="select-sm"
        defaultValue="a-z"
      />
      {/* Producer */}
      <FormSelect
        label="Тварина"
        name="pet"
        list={["Всі", "Собака", "Кіт", "Гризуни", "Птахи"]}
        size="select-sm"
        defaultValue="all"
      />
      {/* PRICE */}
      <FormRange
        name="price"
        label="Ціна"
        size="range-sm"
        price={50000}
      />
      {/* Date Picker */}
      <FormDatePicker label="Мінміальна дата виготовлення" name="date" />

      {/* In stock */}
      <FormCheckbox
        label="Тільки в наявності"
        name="stock"
        defaultValue="false"
      />

      {/* BUTTONS */}

      <button
        type="submit"
        className="btn bg-blue-600 hover:bg-blue-500 text-white btn-sm"
      >
        Пошук
      </button>
      <Link to="/shop?page=1" className="btn btn-primary btn-sm">
        Скинути
      </Link>
    </Form>
  );
};

export default Filters;
