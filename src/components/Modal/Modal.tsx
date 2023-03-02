import { useState } from 'react';
type Props = {
	isValid: boolean;
	errorMsg: string;
	onValidForm: (isValid: boolean, err: string) => void;
};

export const Modal = (props: Props) => {
	const closeModalHandler = () => {
		props.onValidForm(true, '');
	};
	if (props.isValid) return null;
	return (
		<div
			onClick={closeModalHandler}
			className=' fixed inset-0 backdrop-blur-sm top-0 bg-black bg-opacity-60 w-screen h-screen flex flex-col justify-center items-center '>
			<div className='bg-emerald-600 p-2 w-8/12 min-h-[60px] max-w-[700px]'>
				<h2 className='text-2xl ml-4'>Invalid Input</h2>
			</div>
			<div className='bg-slate-200 p-2 w-8/12 min-h-[200px] max-w-[700px] relative'>
				<p className='mt-5 text-lg'>{props.errorMsg}</p>
				<button
					onClick={closeModalHandler}
					className=' text-black  p-2 font-semibold bg-emerald-600 px-5 hover:scale-105 transition-colors duration-300 text-md absolute bottom-6 right-6'>
					Okay
				</button>
			</div>
		</div>
	);
};
