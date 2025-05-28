import { Link } from 'react-router-dom';

function AuthTemplate(props) {
  const { title, subtitle, children, type } = props;
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#e5e5e5]">
      <div className="w-full h-[100vh] flex bg-[#fafafa]  overflow-hidden">
        {/* left */}
        <section className="w-1/2 relative">
          <img src="./authbg.png" className="object-cover w-full h-full" />
        </section>
        {/* right */}
        <section className="w-1/2 flex justify-between h-full px-36 py-10 flex-col">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold font-poppins text-black">
              {title}
            </h2>
            <p className="text-base font-base text-gray-400 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* form */}
          <div>{children}</div>

          {/* conditional rendering */}
          <div className="flex items-center justify-between mt-6">
            <p className="mr-2 text-base text-gray-600">
              {type === 'login'
                ? "Don't have an account?"
                : 'Already have an account?'}
            </p>

            {type === 'login' ? (
              <Link
                to="/register"
                className="text-blue-500 font-semibold text-base hover:text-blue-700 transition duration-300"
              >
                Register
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-blue-500 font-semibold text-base hover:text-blue-700 transition duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default AuthTemplate;
