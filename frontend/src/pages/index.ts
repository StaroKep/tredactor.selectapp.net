/** Don't add Application at this index file */

/** Pages as Functional Components */

export { Home, HomeProps } from './Home';
export { Article, ArticleProps } from './Article';
export { Editor, EditorProps } from './Editor';
export { Profile, ProfileProps } from './Profile';
export { SignIn, SignInProps } from './SignIn';
export { SignUp, SignUpProps } from './SignUp';
export { Sandbox, SandboxProps } from './Sandbox';

/** Pages as containers */

export { Editor as EditorContainer, EditorStateToProps } from './Editor/container';
export { Profile as ProfileContainer, ProfileStateToProps } from './Profile/container';
export {
    SignIn as SignInContainer,
    SignInStateToProps,
    SignInDispatchToProps,
} from './SignIn/container';
export {
    SignUp as SignUpContainer,
    SignUpStateToProps,
    SignUpDispatchToProps,
} from './SignUp/container';
