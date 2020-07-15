import api from '../config/api';
import components_version from '../config/components_version';


export default {
  route: (key = undefined) => {
    return api.version;
  },
  component: (key = undefined, _version = null) => {
    let version = _version;
    if (key && components_version && components_version[key]) {
      version =  components_version[key];
    }
    return version ? `${version}/` : ''
  }
}