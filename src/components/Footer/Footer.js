import { Grid, Button } from "@mui/material";
import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import './footer.css'
const Footer = () => {
  return (
    <>
      <Wrapper
        container
        alignItems={"center"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
        rowGap={5}
      >
        <TopSection
          container
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <FormWrapper
            container
            justifyContent={"space-around"}
            flexDirection={"column"}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <H2>عضویت در کلوپ مشتریان</H2>
            <Form container alignItems={"center"} justifyContent={"center"}>
              <Button variant="contained" sx={{padding: '9px 16px'}}>
                <ArrowForwardIcon />
              </Button>
              <Input type="text" placeholder="شماره همراه" />
            </Form>
          </FormWrapper>

          <LinkWrapper
            container
            alignItems={"center"}
            justifyContent={"space-around"}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <Ul>
              <LiTitle>راه های ارتباطی</LiTitle>
              <Li>مراجعه حضوری</Li>
              <Li>پست الکترونیک</Li>
            </Ul>
            <Ul>
              <LiTitle>خدمات ما</LiTitle>
              <Li>ارسال رایگان تهران</Li>
              <Li>ارسال یک روزه شهرستان</Li>
            </Ul>
            <Ul>
              <LiTitle>نحوه همکاری</LiTitle>
              <Li>افتتاح فروشگاه انلاین</Li>
              <Li>مشارکت در فروش</Li>
            </Ul>
          </LinkWrapper>
        </TopSection>

        <BottomSection container flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
            <Socials container  alignItems={'center'} justifyContent={'space-evenly'}>
                <Social><i class="bi bi-twitter social_icon"></i></Social>
                <Social><i class="bi bi-instagram social_icon"></i></Social>
                <Social><i class="bi bi-telegram social_icon"></i></Social>
                <Social><i class="bi bi-linkedin social_icon"></i></Social>
            </Socials>
        </BottomSection>
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled(Grid)`
  background: rgba(0, 0, 0, 0.02);
  height: 500px;
  margin-top: 20px;
`;
const BottomSection = styled(Grid)``;
const TopSection = styled(Grid)`
  margin-top: 20px;
`;
const FormWrapper = styled(Grid)`
  height: 100px;
`;
const H2 = styled.h2`
  text-align: center;
  color: #03045e;
`;
const Form = styled(Grid)``;
const LinkWrapper = styled(Grid)``;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  width: 50%;
  font-family: unset;
  &::placeholder {
    font-family: unset;
    font-size: 0.8em;
  }
`;
const Ul = styled.ul`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
const Li = styled.li`
  color: #555;
  font-size: 0.8em;
  text-align: center;
  list-style-type: none;
  margin-top : 18px;
`;
const LiTitle = styled.li`
  list-style-type: none;
  color: #03045e;
`;
const Socials = styled(Grid)``;
const Social = styled.span`
transition : all .3s ease;
&:hover {
    transform: scale(1.3);
}
&:active{
    transform: scale(1.3);
}
`;