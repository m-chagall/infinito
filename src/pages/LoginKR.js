import { HiLockClosed } from "react-icons/hi";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function LoginKR() {
  let navigate = useNavigate();
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1, user-scalable=0"
        />
        <title>로그인</title>
      </Helmet>
      <div className="min-h-full pt-20 pb-40 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-32 w-auto rounded-full"
              src={`${process.env.PUBLIC_URL}/img/1.png`}
              alt="Login Logo"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              MY POLYVERSE
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              로그인하시거나{" "}
              <button
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => {
                  navigate("/register");
                }}>
                회원가입
              </button>{" "}
              후 서비스를 이용해주세요.
            </p>
          </div>
          <form className="mt-8 space-y-6" action="/" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  id
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="이메일 주소"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="비밀번호"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900">
                  로그인 정보 기억하기
                </label>
              </div>

              <div className="text-sm">
                <button
                  onClick={() => {
                    navigate("/register");
                  }}
                  className="font-medium text-indigo-600 hover:text-indigo-500 after:content-['|'] after:mx-1">
                  회원가입
                </button>
                <button
                  onClick={() => {
                    navigate("/account-recovery");
                  }}
                  className="font-medium text-indigo-600 hover:text-indigo-500">
                  아이디 및 비밀번호 찾기
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <HiLockClosed
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
