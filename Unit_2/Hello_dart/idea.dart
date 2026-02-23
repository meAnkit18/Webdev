import 'dart:io';
// void main(){

//   // int a = 2;
//   // var t = 44;
//   // int hex = 0xEADEBAEE;



//   // double dfj = 234.00;
//   // // int re = null;
//   // int? re = null;
//   final time = DateTime.now();
//   print(time);
//   const sb = "fj";
// //  const sb = "fj";
//   print(sb);
//   var readLine = stdin.readLineSync();
//   print(readLine);

// }

// class Studeent{
//   String? name;
//   int? roll;
//   String? department;
//   Studeent(this.name,this.roll,this.department){
//     this.name = name;
//     this.roll = roll;
//     this.department = department;
//   }
// }


// mixing
// use with "with" keyword like class and inheritence

// Future to create ==  a class, not a keyword, that represents a potential value or error that will be available at some point in the future after an asynchronous operation completes
Future<String> fetchData(){
  return Future.delayed(Duration(seconds:2),
  ()=>"Data loaded",);
}


void main() async{
  String data = await fetchData();
  print(data);
}
