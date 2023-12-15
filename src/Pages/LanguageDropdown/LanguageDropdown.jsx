/* eslint-disable react/prop-types */
// LanguageDropdown.js


const LanguageDropdown = ({ currentLanguage, onChangeLanguage }) => {
  return (
    <div className="dropdown">
      <button className="btn btn-ghost">
        {currentLanguage === 'en' ? 'English' : 'বাংলা'}
      </button>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-20">
        <li onClick={() => onChangeLanguage('en')}>English</li>
        <li onClick={() => onChangeLanguage('bn')}>বাংলা</li>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
