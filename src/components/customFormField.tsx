import React from 'react'
import Image from 'next/image';
import ReactDatePicker from 'react-datepicker';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Control } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectTrigger, SelectValue } from './ui/select';
import { MdOutlineMail } from "react-icons/md";

interface CustomProps {
    control: Control<any>;
    name: string;
    label?: string;
    placeholder?: string;
    iconSrc?: string;
    iconAlt?: string;
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    children?: React.ReactNode;
    renderSkeleton?: (field: any) => React.ReactNode;
    fieldType: FormFieldType;
}

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
}

const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
    switch (props.fieldType) {
      case FormFieldType.INPUT:
        return (
          <div className="flex rounded-md border border-dark-500 bg-light-200">
            {props.iconSrc && (
              <Image
                src={props.iconSrc}
                height={24}
                width={24}
                alt={props.iconAlt || "icon"}
                className="ml-2 fill-dark-200"
              />
            )}
            <FormControl>
              <Input
                placeholder={props.placeholder}
                {...field}
                className="shad-input border-0"
              />
            </FormControl>
          </div>
        );
      case FormFieldType.TEXTAREA:
        return (
          <FormControl>
            <Textarea
              placeholder={props.placeholder}
              {...field}
              className="shad-textArea"
              disabled={props.disabled}
            />
          </FormControl>
        );
      case FormFieldType.CHECKBOX:
        return (
          <FormControl>
            <div className="flex items-center gap-4">
              <Checkbox
                id={props.name}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <label htmlFor={props.name} className="checkbox-label">
                {props.label}
              </label>
            </div>
          </FormControl>
        );
      case FormFieldType.DATE_PICKER:
        return (
          <div className="flex rounded-md border border-dark-500 bg-light-200">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="user"
              className="ml-2"
            />
            <FormControl>
              <ReactDatePicker
                showTimeSelect={props.showTimeSelect ?? false}
                selected={field.value}
                onChange={(date: Date | null) => field.onChange(date)}
                timeInputLabel="Time:"
                dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
                wrapperClassName="date-picker"
              />
            </FormControl>
          </div>
        );
      case FormFieldType.SELECT:
        return (
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="shad-select-trigger">
                  <SelectValue placeholder={props.placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="shad-select-content">
                {props.children}
              </SelectContent>
            </Select>
          </FormControl>
        );
      case FormFieldType.SKELETON:
        return props.renderSkeleton ? props.renderSkeleton(field) : null;
      default:
        return null;
    }
  };


const CustomFormField = (props: CustomProps) => {
    const {control, name, label} = props;

    return (
        <FormField 
            control={control}
            name={name}
            render={
                ({field}) => (
                    <FormItem className='flex-1'>
                        {props.fieldType !== FormFieldType.CHECKBOX && label && (
                            <FormLabel className='shad-input-label'>{label}</FormLabel>
                        )}
                        <RenderInput field={field} props={props}/>

                        <FormMessage className='shad-error'/>
                    </FormItem>
                )  
            }
        />
    )
}

export default CustomFormField;