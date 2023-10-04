<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@page isELIgnored="false"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!doctype html>
<html lang="en">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Bootstrap CSS -->
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
	integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
	crossorigin="anonymous">

<title>HOME PAGE</title>
</head>
<body>
	<div class="container mt-3">
		<h1 class="text-center">Welcome to TODO Manager</h1>

		<c:if test="${not empty message}">

			<div class="alert alert-success">
				<b><c:out value="${message}" /></b>
			</div>
		</c:if>
		<div class="row mt-5">

			<div class="col-md-2">
				<h3 class="text-center">Options</h3>
				<div class="list-group">
					<button type="button"
						class="list-group-item list-group-item-action active">
						Menu</button>
					<a href='<c:url value='/add'></c:url>' type="button"
						class="list-group-item list-group-item-action">Add</a> <a
						href='<c:url value='/home'></c:url>' type="button"
						class="list-group-item list-group-item-action">View</a>

				</div>
			</div>
			<div class="col-md-10">
				<c:if test="${page== 'home'}">
					<h3>Your Tasks</h3>
					<c:forEach items="${allTodos}" var="t">
						



						<div class="row">
							<div class="col-sm-12">
								<div class="card">
									<div class="card-body">
										<h5 class="card-title">
											<c:out value="${t.title}" />
										</h5>
										<p class="card-text">
											<c:out value="${t.content}" />
										</p>
										<a href="delete/${t.id}" class="btn btn-danger">Delete</a>
									</div>
								</div>
							</div>
						</div>

					</c:forEach>
				</c:if>

				<c:if test="${page== 'add'}">
					<h3>Add TODO</h3>

					<form:form action="savetodo" method="post" modelAttribute="todo">

						<div class="form-group">
							<form:input path="title" cssClass="form-control"
								placeholder="Enter Title" />


						</div>
						<div class="form-group">
							<form:textarea path="content" cssClass="form-control"
								placeholder="Enter Content" />
						</div>

						<div class="container text-center">
							<button class="btn btn-outline-success">Add</button>
						</div>

					</form:form>

				</c:if>
			</div>
		</div>
	</div>

	<!-- Optional JavaScript; choose one of the two! -->

	<!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
	<script
		src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
		integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
		crossorigin="anonymous"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
		crossorigin="anonymous"></script>

	<!-- Option 2: Separate Popper and Bootstrap JS -->
	<!--
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
    -->
</body>
</html>