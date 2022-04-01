export function EnglishNumberToPersian() {
    String.prototype.toPersian = function () {
        let num = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
        return this.replace(/[0-9]/g, function (number) {
          return num[+number];
        });
      };
}