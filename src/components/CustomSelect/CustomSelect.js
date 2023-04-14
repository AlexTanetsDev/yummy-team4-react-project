import Select from 'react-select';


export function CustomSelect({
  options,
	onChange,
  label,
  defaultValue='',
  customStyles,
  isSearchable = true,
}) {

  return (
    <Select
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      styles={customStyles}
    //   maxMenuHeight={maxMenuHeight}
      unstyled
      required
      aria-errormessage="error"
      aria-invalid
      aria-labelledby={label}
      placeholder={label}
      isSearchable={isSearchable}
    />
  );
}
