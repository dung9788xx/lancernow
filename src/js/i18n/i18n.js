import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {PASSWORD_LENGTH} from "../constansts/apiConstants";

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
                    'Request failed with status code 500' : ' Some thing went wrong please try again!',
                    'logout' : 'Logout',
                    'error' : 'Error',
                    'reset_password' : 'Reset password',
                    'web_name' :'LancerNow',
                    'enter_email' : 'Please enter your email address to reset your password',
                    'success' : 'Success',
                    'new_password' : 'Enter your new password',
                    'repassword' : 'Confirm Password',
                    'change_password' : 'Change password',
                    'password_length' : 'Password length must be than '+PASSWORD_LENGTH+'!',
                    'password_not_match' : "Password doesn't match!",
                    'page_not_found' : "The page you're looking for was not found.",
                    'back_home' : 'Back to home page'
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
                    'Request failed with status code 500' : 'Có lỗi xảy ra vui lòng thử lại!',
                    'logout' : 'Đăng xuất',
                    'error' : 'Lỗi',
                    'reset_password' : 'Khôi phục mật khẩu',
                    'web_name' :'LancerNow',
                    'enter_email' : 'Vui lòng nhập địa chỉ email của bạn để khôi phục lại mật khẩu',
                    'success' : 'Thành công',
                    'new_password' : 'Nhập mật khẩu mới của bạn',
                    'repassword' : 'Nhập lại mật khẩu',
                    'change_password' : 'Thay đổi mật khẩu',
                    'password_length' : 'Độ dài mật khẩu lớn hơn '+PASSWORD_LENGTH+'!',
                    'password_not_match' : 'Hai mật khẩu không khớp!',
                    'page_not_found' : "Trang bạn đang tìm kiếm không tồn tại.",
                    'back_home' : 'Quay lại trang chủ'
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
