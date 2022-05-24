import { TextField, Button, Grid, CircularProgress } from "@mui/material";
import styled from "styled-components";
import RTL from "../../../../Theme/RTL";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextFieldTheme from "../../../../Theme/TextFieldTheme";
import { useCommentContext } from "../../../../Context/CommentContext";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { AlertTheme } from "../../../../Theme/AlertTheme";

function CreateComment() {
  const [sendComment, setSendComment] = useState(false);
  const [wait,setWait] = useState(false);
  const { handleSaveComments } = useCommentContext();
  const schema = yup
    .object()
    .shape({
      title: yup.string().required("وارد کردن عنوان الزامی میباشد"),
      email: yup.string().email("ایمیل وارد شده صحیح نمیباشد"),
      phone: yup
        .number()
        .typeError("فرمت شماره وارد شده صحیح نمیباشد")
        .required("شماره همراه خود را وارد کنید"),
      text: yup.string().required("دیدگاهی اضافه کنید"),
    })
    .required();

  const defaultValues = {
    title: "",
    email: "",
    phone: "",
    text: "",
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    handleSaveComments(data);
    setWait(true);
    setTimeout(() => {
    setSendComment(true);
    setWait(false);
    },2000)
  };
  return (
    <>
      {!sendComment ? (
        <>
          <RTL>
            <TextFieldTheme>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Grid
                  container
                  alignItems={"center"}
                  justifyContent={"space-around"}
                >
                  <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="عنوان"
                        name="title"
                        size="small"
                        error={!!errors.title}
                        helperText={errors?.title?.message}
                        variant="standard"
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="ایمیل"
                        name="email"
                        size="small"
                        error={!!errors.email}
                        helperText={errors?.email?.message}
                        variant="standard"
                      />
                    )}
                  />
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="شماره تماس"
                        name="phone"
                        size="small"
                        error={!!errors.phone}
                        helperText={errors?.phone?.message}
                        variant="standard"
                      />
                    )}
                  />
                </Grid>
                <TextArea
                  {...register("text")}
                  maxLength={400}
                  placeholder="دیدگاه خود را بنویسید ..."
                ></TextArea>
                <P>{errors.text?.message}</P>
                <Button type="submit" disabled={!isValid} variant="outlined">
                 {!wait ? (
                   " ثبت دیدگاه"
                 ) : (
                   <CircularProgress />
                 )}
                </Button>
              </Form>
            </TextFieldTheme>
          </RTL>
        </>
      ) : (
        <AlertTheme>
          <Alert variant="outlined" severity="success">
            دیدگاه شما با موفقیت ثبت شد با تشکر از همراهی شما
          </Alert>
        </AlertTheme>
      )}
    </>
  );
}

export default CreateComment;

const TextArea = styled.textarea`
  max-width: 300px;
  max-height: 300px;
  min-width: 100px;
  min-height: 100px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 7px;
  margin: 30px 0 0 0;
  font-family: font-sans;
  &:focus {
    border: 1px solid #ccc !important;
    outline: none !important;
  }
  &::placeholder {
    font-size: 0.8em;
  }
`;
const Form = styled.form`
  min-height: 300px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  margin-top: 60px;
`;

const P = styled.p`
  color: #d32f2f;
  font-size: 0.8em;
`;
