import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    "username": "Username",
                    "email" : "Email",
                    "password": "Password",
                    "login":"Login",
                    "register":"Register",
                    'forgot_password':"Forgot password?",
                    'username_password_empty':"Username and password cannot be empty!",
                    'home':'Home',
                    'job':'Jobs',
                    'need_account': "Don't have an account? Sign Up",
                    'remember_me' : "Remember me",
                    'login_failed': " Login Failed",
                    'Network Error':'Network Error',
                    'Request failed with status code 500' : ' Some thing went wrong please try again!'
                }
            },
            vn: {
                translations: {
                    "username": "Tên đăng nhập",
                    "email" : "Email",
                    "password": "Mật khẩu",
                    "login":"Đăng nhập",
                    "register":"Đăng ký",
                    "forgot_password":"Quên mật khẩu?",
                    'username_password_empty':"Tên tài khoản mật khẩu không được để trống!",
                    'home':'Trang chủ',
                    'job':'Việc làm',
                    'need_account': "Chưa có tài khoản? Đăng ký",
                    'remember_me' : "Ghi nhớ tôi",
                    'login_failed': " Đăng nhập thất bại",
                    'Network Error':"Kiểm tra lại kết nối",
                    'Request failed with status code 500' : 'Có lỗi xảy ra vui lòng thử lại!'
                }
            }
        },
        fallbackLng: 'vn',

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ','
        },

        react: {
            wait: true
        }
    });

export default i18n;
