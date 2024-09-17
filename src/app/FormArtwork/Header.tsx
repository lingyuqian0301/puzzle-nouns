const Header: React.FC = () => {
  return (
    <header className="flex flex-col pr-6 pl-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start self-start mt-1.5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d7bf6ecb7df695e67c9d06f6dd931206a4aa3f1b3654c3f770cdee5effc7eec?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
            alt=""
            className="object-contain shrink-0 max-w-full aspect-[11.76] w-[270px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbaec7794a3b2189c58b8ffc9e10e34a212bbe3b7f8a90e76dc57865fd21ac6b?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
            alt=""
            className="object-contain mt-2.5 aspect-[18.87] w-[266px]"
          />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eb348fbfe17e6c156e350bc5975a37c49d8de8b60b32f46b16533fd218ef4b3?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
          alt=""
          className="object-contain shrink-0 w-12 aspect-square"
        />
      </div>
    </header>
  );
};

export default Header;