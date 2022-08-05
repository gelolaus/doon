<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Insert title here</title>
</head>
<body>

<%@page 
import= "java.sql.*"
import = "javax.swing.JOptionPane.*"
import =  "java.awt.*"
import = "java.awt.event.*"
import  = "javax.swing.*"
%>

<%

Class.forName("com.mysql.jdbc.Driver");
Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/doon_db", "root", "20054NG3L0L4U5");

String InputEmail = request.getParameter("email");
String InputPassword = request.getParameter("password");
Statement stmt = con.createStatement() ; 

try 
{
    if (InputEmail != null && InputPassword != null) 
    {
        String sql = "Select * from userinfo_tbl Where userEmail = '"+InputEmail+"' and userPassword = '"+InputPassword+"'";
        ResultSet rs = stmt.executeQuery(sql);
        if (rs.next()) 
        {
        	response.sendRedirect("/Doon_DWP/appHome/index.html");  
        } 
   
        else 
        {
        	response.sendRedirect("/Doon_DWP/appLogin/index.html") ; 
        }
    }
} 
catch (SQLException err) 
{
    out.println("Error") ; 
}

%>

</body>
</html>