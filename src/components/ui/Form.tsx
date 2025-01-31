import { useToast } from '@/hooks/use-toast'
import { CircleAlert } from 'lucide-react'
import { motion as m } from 'motion/react'
import { Controller, useForm } from 'react-hook-form'
import { FormValues } from '../../../Types'
import { Checkbox } from './checkbox'
import FormInput from './FormInput'
import { RadioGroup, RadioGroupItem } from './radio-group'
import { ScrollArea } from './scroll-area'
import { Textarea } from './textarea'

const Form = () => {
    const {toast} = useToast();
    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm<FormValues>({
        defaultValues: {
            firstName: '',
            lastName: '',
            emailAddress: '',
            queryType: '',
            message: '',
            consent: false
        }
    })
    const submit = () => {
        toast({
          title: "Message Sent!",
          description:
            "Thanks for completing the form. We'll be in touch soon!",
        });
    }
  return (
    <form className="mt-6 h-full pb-20 " onSubmit={handleSubmit(submit)}>
      <ScrollArea className="h-full" scrollHideDelay={0}>
        <FormInput
          control={control}
          label="First Name *"
          name="firstName"
          placeholder="First Name"
          rules={{
            required: {
              value: true,
              message: "First name is required",
            },
            min: {
              value: 2,
              message: "First name must be at least 2 characters",
            },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message:
                "First name can not contain numbers or special characters",
            },
          }}
          error={errors.firstName}
        />
        <FormInput
          control={control}
          label="Last Name *"
          name="lastName"
          placeholder="Last Name"
          rules={{
            required: {
              value: true,
              message: "Last name is required",
            },
            min: {
              value: 2,
              message: "Last name must be at least 2 characters",
            },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message:
                "Last name can not contain numbers or special characters",
            },
          }}
          error={errors.lastName}
        />
        <FormInput
          control={control}
          label="Email Address *"
          name="emailAddress"
          placeholder="example@example.com"
          rules={{
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          }}
          error={errors.emailAddress}
        />
        <div className="mb-3">
          <label htmlFor="query" className="mb-1 block">
            Query Type *
          </label>
          <Controller
            control={control}
            name="queryType"
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                value={value}
                onValueChange={onChange}
                className="flex flex-col md:flex-row"
              >
                <div
                  className={`${
                    value === "general" ? "bg-green-200 text-black" : undefined
                  } w-full md:w-1/2 flex items-center space-x-2 border-[1px] rounded-lg p-2 border-grey-500`}
                >
                  <RadioGroupItem
                    value="general"
                    id="gen"
                    className="peer/gen"
                  />
                  <label htmlFor="gen">General</label>
                </div>
                <div
                  className={`${
                    value === "support" ? "bg-green-200 text-black" : undefined
                  } w-full md:w-1/2 flex items-center space-x-2 border-[1px] rounded-lg p-2 border-grey-500`}
                >
                  <RadioGroupItem value="support" id="support" />
                  <label htmlFor="support">Support Request</label>
                </div>
              </RadioGroup>
            )}
            rules={{
              required: {
                value: true,
                message: "Please select a query type",
              },
            }}
          />
          <div className="h-4">
            {errors.queryType && (
              <div className="flex items-center gap-2 mt-2">
                <CircleAlert color="red" size={15} />
                <m.p
                  className="text-red text-sm"
                  initial={{ translateX: -100 }}
                  animate={{ translateX: 0 }}
                >
                  {errors.queryType.message}
                </m.p>
              </div>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="mb-1 block">
            Message *
          </label>
          <Controller
            control={control}
            name="message"
            render={({ field: { onChange, value } }) => (
              <Textarea
                value={value}
                onChange={onChange}
                placeholder="Type your message here..."
                rows={4}
              />
            )}
            rules={{
              required: {
                value: true,
                message: "Message is required",
              },
            }}
          />
          <div className="h-4">
            {errors.message && (
              <div className="flex items-center gap-2 mt-2">
                <CircleAlert color="red" size={15} />
                <m.p
                  className="text-red text-sm"
                  initial={{ translateX: -100 }}
                  animate={{ translateX: 0 }}
                >
                  {errors.message.message}
                </m.p>
              </div>
            )}
          </div>
        </div>
        <div className="mb-3">
          <div className="items-top flex space-x-2">
            <Controller
              control={control}
              name="consent"
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  id="consent"
                  value={value.toString()}
                  onCheckedChange={onChange}
                />
              )}
              rules={{
                required: {
                  value: true,
                  message:
                    "To submit this form, please consent to being contacted",
                },
              }}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I consent to being contacted by the team *
              </label>
            </div>
          </div>
          <div className="h-4">
            {errors.consent && (
              <div className="flex items-center gap-2 mt-2">
                <CircleAlert color="red" size={15} />
                <m.p
                  className="text-red text-sm"
                  initial={{ translateX: -100 }}
                  animate={{ translateX: 0 }}
                >
                  {errors.consent.message}
                </m.p>
              </div>
            )}
          </div>
        </div>
        <m.button
          className="bg-green-600 p-3 w-full rounded-lg text-white font-bold mt-6"
          whileTap={{ scale: 0.9 }}
        >
          Submit
        </m.button>
      </ScrollArea>
    </form>
  );
}

export default Form
