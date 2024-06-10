export function replaceParam(text: string, param: string, value: string | number): string {
   const regex = new RegExp(`:${param}`, 'g');
   return text.replace(regex, value.toString());
}