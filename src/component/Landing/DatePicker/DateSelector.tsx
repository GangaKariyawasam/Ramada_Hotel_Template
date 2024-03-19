import React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import styles from './dateSelector.module.less';

interface DateSelectorProps {
    placeholder: string;
}
const DateSelector: React.FC<DateSelectorProps> = ({placeholder}) =>{
    return (
       <div className={styles.container}>
           <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DemoContainer
                   components={[
                       'DatePicker',
                   ]}
               >
                   <DemoItem >
                       <DatePicker slotProps={{ textField: { placeholder: placeholder } }} />
                   </DemoItem>
               </DemoContainer>
           </LocalizationProvider>
       </div>
    );
}
export default DateSelector;