import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { addMember } from '../../context/members/actions';
import { useMembersDispatch } from "../../context/members/context";

type Inputs = {
    name: string
    email: string
    password?: string
};


const NewMember = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const dispatchMembers = useMembersDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const openModal = () => {
      setIsOpen(true)
  }

  // const [name, setName] = useState('');

  const closeModal = () => {
    setIsOpen(false)
    setError(null);
    setEmailError(null);
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
      try {
          const { name , email, password} = data;
          const response = await addMember(dispatchMembers, {name, email, password})
           
          if (response.ok) {
            window.location.reload();
            setIsOpen(false)
          } else {
            if (response.error === 'email must be unique') {
              setEmailError(response.error);  
            } else {
              setError(response.error as React.SetStateAction<null>)
            }
          }
        } catch (error) {
          console.error('Operation failed:', error);
        }
    };

  return (
      <>
      <button
        type="button"
        id="new-member-btn"
        onClick={openModal}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        New Member
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create new Member
                  </Dialog.Title>
                  <div className="mt-2">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {error &&
                          <span className="text-red-500">{error}</span>
                        }
                    {/* Name input */}
                    <input
                        type="text"
                        required
                        placeholder="Enter Member name..."
                        autoFocus
                        {...register('name', { required: true })}
                        id="name"
                        className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                        errors.name ? 'border-red-500' : ''
                        }`}
                    />
                    {errors.name && <span className="text-red-500">This field is required</span>}

                    {/* Email input */}
                    <input
                        type="email"
                        required
                        placeholder="Enter Member email..."
                        {...register('email', {
                        required: true,
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Please enter a valid email address',
                        },
                        })}
                        id="email"
                        className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                        errors.email || emailError ? 'border-red-500' : ''
                        }`}
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message || 'This field is required'}</span>}
                    {emailError && <span className="text-red-500">{emailError}</span>}  {/* Email-specific error */}

                    {/* Password input */}
                    <input
                        type="password"
                        required
                        placeholder="Enter Member password..."
                        {...register('password', {
                        required: true,
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters long',
                        },
                        })}
                        id="password"
                        className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                        errors.password ? 'border-red-500' : ''
                        }`}
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message || 'This field is required'}</span>}

                    <button type="submit" id="create-member-btn" className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                        Submit
                    </button>
                    <button type="button" id="cancel-member-btn" onClick={closeModal} className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                        Cancel
                    </button>
                  </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>    
    </>
    )
}

export default NewMember;