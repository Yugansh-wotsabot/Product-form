import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./accountSchema";
import { FaUser, FaBuilding } from "react-icons/fa";
import { CheckBoxField,TextInputField, SelectField } from "./FormFields";
import PropTypes from "prop-types";

import TermsSection from "./TermsSection"; // Importing TermsSection

const InvoiceForm = ({ closeModal }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [isSavingNew, setIsSavingNew] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data, event) => {
    event.preventDefault();
    const inputData = event.nativeEvent.submitter.name;

    if (inputData === "save") {
      setIsSaving(true);
    } else if (inputData === "saveAndNew") {
      setIsSavingNew(true);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Data saved:", data);

    setIsSaving(false);
    setIsSavingNew(false);

    if (inputData === "saveAndNew") {
      reset();
    } else {
      closeModal();
    }
  };

  return (
    <div className="relative bg-white p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="pt-20">
        <div className="p-4">
          <div className="absolute shadow-md p-4 top-0 left-0 right-0 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold">Create Product</h2>
              <a
                href="/some-link"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Edit Page Layout
              </a>
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                className="bg-gray-100 text-black shadow-md py-2 px-4 rounded"
                onClick={closeModal}
                disabled={isSaving || isSavingNew}
              >
                Cancel
              </button>
              <button
                type="submit"
                name="saveAndNew"
                className="bg-gray-100 text-black shadow-md py-2 px-4 rounded"
                disabled={isSaving || isSavingNew}
              >
                {isSavingNew ? "Saving..." : "Save and New"}
              </button>
              <button
                type="submit"
                name="save"
                className="bg-blue-500 text-white shadow-md py-2 px-4 rounded"
                disabled={isSaving || isSavingNew}
              >
                {isSaving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>

          <div className="mt-4">
  <h3 className="text-lg font-semibold mb-3">Product Information</h3>
  <div 
    className="grid grid-cols-2 gap-4" 
    style={{ gridAutoRows: '1fr', alignItems: 'start' }} // Ensure proper alignment
  >
    <div className="grid gap-4 pl-20">
      <SelectField
        name="ProductOwner"
        control={control}
        label="Product Owner"
        placeholder="Select Product Owner"
        options={["Sabu John Bosco", "Owner2", "Owner3"]}
        errors={errors}
        icon={FaUser}
      />
      <TextInputField
        name="Product code"
        control={control}
        label="Product code"
        errors={errors}
      />
     

      <SelectField
        name="ProductCategory"
        control={control}
        label="Product Category"
        placeholder="Select Category"
        options={["None", "Sabu John Bosco", "Owner2", "Owner3"]}
        errors={errors}
        icon={FaUser}
      />
      <TextInputField
        name="duedate"
        control={control}
        label="Sales End Date"
        placeholder="DD/MM/YYYY"
        errors={errors}
      />
      <TextInputField
        name="duedate"
        control={control}
        label="Support End Date"
        placeholder="DD/MM/YYYY"
        errors={errors}
      />
      <CheckBoxField
  name="Product Active"
  register={register}
  label="Product Active"
  errors={errors}
  containerClass="flex"
  labelClass="mr-6" // Optional: Adds spacing between label and checkbox
/>
    </div>

    <div className="grid gap-4 pl-20">
      <TextInputField
        name="Salesorder"
        control={control}
        label="Product Name"
        errors={errors}
      />
      <TextInputField
        name="Accountname"
        control={control}
        label="Vendor Name"
        errors={errors}
        icon={FaBuilding}
      />
      <SelectField
        name="Manufacturer"
        control={control}
        label="Manufacturer"
        placeholder="Select Manufacturer"
        options={["None", "Sabu John Bosco", "Owner2", "Owner3"]}
        errors={errors}
        icon={FaUser}
      />
      <TextInputField
        name="duedate"
        control={control}
        label="Sales Start Date"
        placeholder="DD/MM/YYYY"
        errors={errors}
      />
      <TextInputField
        name="duedate"
        control={control}
        label="Support Start Date"
        placeholder="DD/MM/YYYY"
        errors={errors}
      />
    </div>
  </div>
</div>


          {/* Price Information Section */}
<div className="mt-12"> {/* Adjusted margin to fix spacing */}
  <h3 className="text-lg font-semibold">Price Information</h3>
  <div 
    className="grid grid-cols-2 gap-4 mt-6"
    style={{ gridAutoRows: '1fr', alignItems: 'start' }} // Ensure proper alignment
  >
    <div className="grid gap-4 pl-20">
      <TextInputField
        name="billingStreet"
        control={control}
        label="Unit Price"
        errors={errors}
      />
      <SelectField
        name="Tax"
        control={control}
        label="Tax"
        options={["None", "Sabu John Bosco", "Owner2", "Owner3"]}
        errors={errors}
      />
      <CheckBoxField
         name="Taxable"
         register={register}
         label="Taxable "
         errors={errors}
         containerClass="flex"
         labelClass="mr-16"
      />
    </div>

    <div className="grid gap-4 pl-20">
      <TextInputField
        name="Commission Rate"
        control={control}
        label="Commission Rate"
        errors={errors}
      />
    </div>
  </div>
</div>

          {/* Stock Information Section */}
<div className="mt-12">
  <h3 className="text-lg font-semibold">Stock Information</h3>
  <div 
    className="grid grid-cols-2 gap-4 mt-6" 
    style={{ gridAutoRows: '1fr', alignItems: 'start' }} // Ensures uniform row height
  >
    <div className="grid gap-4 pl-20">
      <SelectField
        name="UsageUnit"
        control={control}
        label="Usage Unit"
        options={["Box", "Sabu John Bosco", "Owner2", "Owner3"]}
        errors={errors}
        icon={FaUser}
      />
      <TextInputField
        name="QuantityinStock"
        control={control}
        label="Quantity in Stock"
        errors={errors}
      />
      <SelectField
        name="Handler"
        control={control}
        label="Handler"
        options={["None", "Sabu John Bosco", "Owner2", "Owner3"]}
        errors={errors}
        icon={FaUser}
      />
    </div>

    <div className="grid gap-4 pl-20">
      <TextInputField
        name="QtyOrdered"
        control={control}
        label="Qty Ordered"
        errors={errors}
      />
      <TextInputField
        name="Reorder Level"
        control={control}
        label="Reorder Level"
        errors={errors}
      />
      <TextInputField
        name="QuantityinDemand"
        control={control}
        label="Quantity in Demand"
        errors={errors}
      />
    </div>
  </div>
</div>


          {/* Terms Section */}
          <div className="mt-12">
            <TermsSection /> {/* Added TermsSection component */}
          </div>
        </div>
      </form>
    </div>
  );
};

InvoiceForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default InvoiceForm;
