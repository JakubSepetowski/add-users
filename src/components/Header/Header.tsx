import { Input } from './Form/Form';
import { User } from '../../types/Types';

type Props = {
	onRednerUsers: (user: User) => void;
	onValidForm: (isValid: false, err:string) => void;
};

export const Header = (props: Props) => {
	const onAddUserHandler = (user: User) => {
		props.onRednerUsers(user);
	};
	const validFormHandler = (isValid: false, err:string) => {
		props.onValidForm(isValid,err);
	};

	return (
		<div className='flex flex-col justify-center items-center  bg-gray-700 w-full max-w-[800px] p-10'>
			<Input onAddUser={onAddUserHandler} onValidForm={validFormHandler} />
		</div>
	);
};
