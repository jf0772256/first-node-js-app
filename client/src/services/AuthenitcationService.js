
import Api from '@/services/Api'

export default {
  register (credentials){
    return Api().post('register',credentials)
  }
}

// testing
AuthenticationService.register({
  email:"jessefender@jessefender.com",
  password:"mysupersecretpassword"
})
