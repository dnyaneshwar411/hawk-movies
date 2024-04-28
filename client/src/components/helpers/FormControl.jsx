export default function FormControl({ id, label, type, placeholder, styles }) {
  return <div className={`mb-8 md:mb-0 ${styles}`}>
    <h3 className="mb-4"><label htmlFor={id}>{label}</label></h3>
    <input type={type} id={id} className="input" placeholder={placeholder} />
  </div>
}