import {Transition} from "@headlessui/react";

export default function PostTransition({children, show, appear}) {
    return(
        <Transition
            appear={appear}
            show={show}
            enter="transition-opacity duration-400"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-400"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            {children}
        </Transition>
    )
}