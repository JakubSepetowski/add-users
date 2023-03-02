import { User } from '../../types/Types';

type Props = {
	userInfo: User;
};
export const NewUser = (props: Props) => {
	return (
		<div className='mt-5 flex w-full max-w-[800px] pl-10 pr-10 pt-5 pb-5 bg-emerald-500'>
			<h3>{props.userInfo.userName}</h3>
			<p className='ml-2'>({props.userInfo.userAge})</p>
		</div>
	);
};
