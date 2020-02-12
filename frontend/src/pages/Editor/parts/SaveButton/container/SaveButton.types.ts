// TODO: rename all container types to ComponentStateProps and ComponentDispatchProps
import { SaveButtonProps } from 'pages/Editor/parts/SaveButton';

export type SaveButtonDispatchProps = Pick<SaveButtonProps, 'save'>;
