import {useForm} from "react-hook-form";
import {useSignup} from "../../api/useSignup.js";
import styles from "../ProductForm/ProductForm.module.css"

export function SignupFrom() {
    const {signup, isLoading} = useSignup();
    const {
        register,
        formState,
        getValues,
        handleSubmit,
        reset
    } = useForm();
    const {errors} = formState;

    function onSubmit({fullName, email, password}) {
        signup(
            {fullName, email, password},
            {onSettled: () => reset}
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit) } className={styles.productForm}>
            <div>
                <label>
                    Imię i nazwisko
                    <input type="text" id="fullName" disabled={isLoading}
                           {...register("fullName", {required: "To pole jest wymagane"})}/>

                    {errors?.fullName?.message && (
                        <span>{errors.fullName.message}</span>
                    )}
                </label>
            </div>

            <div>
                <label>
                    Email
                </label>
                <input type="email" id="email" disabled={isLoading} {...register("email", {
                    required: "To pole jest wymagane", pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Podany format jest niepoprawny"
                    }
                })}/>
                {errors?.email?.message && (
                    <span>{errors.email.message}</span>
                )}
            </div>

            <div>
                <label>
                    Hasło (minimum 8 znaków)
                    <input type="password" id="password" disabled={isLoading} {...register("password", {
                        required: "To pole jest wymagane",
                        minLength: {
                            value: 8,
                            message: "Hasło musi zawierać minimum 8 znaków"
                        }
                    })}/>
                </label>
                {errors?.password?.message && (
                    <span>{errors.password.message}</span>
                )}
            </div>

            <div>
                <label>
                    Powtórz hasło
                    <input type="password" id="passwordConfirm" disabled={isLoading} {...register("passwordConfirm", {
                        required: "To pole jest wymagane",
                        validate: (value) => value === getValues().password || 'Hasła nie są takie same',
                    })}/>
                </label>
                {errors?.passwordConfirm?.message && (
                    <span>{errors.passwordConfirm.message}</span>
                )}
            </div>
            <div>
                <button
                    type="reset"
                className={styles.myButton}
                >
                    Anuluj
                </button>
                <button type="submit" disabled={isLoading} className={styles.myButton}>
                    Stwórz konto
                </button>
            </div>
        </form>
    );
}