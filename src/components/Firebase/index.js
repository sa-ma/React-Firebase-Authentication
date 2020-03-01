import Firebase, {
  createTraditionalUser,
  signInTraditionalUser,
  signOutUser,
  signInWithGoogle
} from './firebase';
import FirebaseContext from './context';

export default Firebase;
export {
  FirebaseContext,
  createTraditionalUser,
  signInTraditionalUser,
  signOutUser,
  signInWithGoogle
};
