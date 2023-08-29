interface MainCardProps {
  id: string;
  number: string;
  enname: string;
  krname: string;
  form1: string;
  form2: string;
  form3: string;
  form4: string;
  form5: string;
  imgname: string;
}

const MainCard = ({
  id,
  number,
  enname,
  krname,
  form1,
  form2,
  form3,
  form4,
  form5,
  imgname,
}: MainCardProps) => {
  return (
    <div>
      {id}, {number}, {enname}, {krname}, {form1}, {form2}, {form3}, {form4},{" "}
      {form5}, {imgname}
    </div>
  );
};

export default MainCard;
