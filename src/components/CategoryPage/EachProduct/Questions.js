import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

function Questions() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>تاریخ تولید این محصول رو میخوام بدونم؟</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'#aaa'}}>
            این محصول تولید سال 2021 هستش و خدمت شما با گارانتی تقدیم میشه پس
            اگه برای پنج سال پیشم بود نگرانش نباشید البته که نیست
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            میخواستم ببینم فقط همین شرکت ازش تولید میکنه ؟؟؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'#aaa'}}>
            ببینید همین شرکت که نه اما خب در حال حاضر فقط کمپانی ایکس در این حجم
            توان تولید رو داره و جنس غالب بازار هست
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
           چرا این همه افزایش قیمت واقعا مگه چه اتفاقی افتاده تو بازار ما خبر نداریم ؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color:'#aaa'}}>
           تحریم و قیمت دلار و تصمیمات گمرکی جدید و ده ها مورد دیگه باعث میشه گرون تر بخریم و مجبوریم گرون تر هم بفروشیم طبیعتا
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Questions;
