import { Group, Input, FormInputLabel } from './form-input.styles'

const FormInput = ({ label, ...otherProps }) => {
    
    return (
        <Group>
            <Input
                {...otherProps}
            />
            {label && (
                <FormInputLabel shrink={otherProps.value.lenght}>
                {label}
                </FormInputLabel>
            )}
        </Group>
    )
}
export default FormInput;