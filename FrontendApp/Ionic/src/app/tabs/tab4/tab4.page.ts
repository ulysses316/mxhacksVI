import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/employee';

declare var M: any;

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private employeeService: EmployeeService,
              public toastController: ToastController,
              public alertController: AlertController) { }

  ngOnInit() {
    this.getEmployees();
  }

  //Toast
  async presentToast() {
    const toast = await this.toastController.create({
      position: 'top',
      color: 'dark',
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  addEmployee(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getEmployees();
          this.presentToast();
        });
    } else {
      this.employeeService.postEmployee(form.value)
      .subscribe(res => {
        this.getEmployees();
        this.resetForm(form);
        this.presentToast();
      });
    }
    
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[];
      });
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.employeeService.deleteEmployee(_id)
        .subscribe(res => {
          this.getEmployees();
          this.resetForm(form);
          this.presentToast();
        });
    }
  }

  //Delete employed
  async deleteEmployeeAlert(_id: string, form: NgForm) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.employeeService.deleteEmployee(_id)
        .subscribe(res => {
          this.getEmployees();
          this.resetForm(form);
          this.presentToast();
        });
          }
        }
      ]
    });
    await alert.present();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

}
